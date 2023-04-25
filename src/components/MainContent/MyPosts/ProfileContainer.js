import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileThunk, setFriendProfile} from "../../../redux/profile_reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";


//https://social-network.samuraijs.com/api/1.0/profile/{userId}


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params['*'];
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunk(userId);
        // profileAPI
        //     .getProfile(userId)
        //     .then(data => {
        //         //console.log(response.data)
        //         this.props.setFriendProfile(data);
        //     });
    }

    render(){
        if (!this.props.isAuth) {return <Navigate to={'/login'} />  }
        return <Profile {...this.props} profile = {this.props.profile} />
    }

}
// !!!!!!!!!!!!!!!!!!!!!!!!!wrapper to us react router's v6 hooks in class component (to use HOC pattern, like in router v5)!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function withRouter(Component) {

    function ComponentWithRouterProp(props) {

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {getProfileThunk} )( withRouter( ProfileContainer ) );

// export default connect( mapStateToProps, { setFriendProfile, getProfileThunk} )( withRouter( ProfileContainer ) );

// export default connect(mapStateToProps, {setFriendProfile})(ProfileContainer);