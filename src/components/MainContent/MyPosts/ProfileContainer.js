import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setFriendProfile} from "../../../redux/profile_reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";

//https://social-network.samuraijs.com/api/1.0/profile/{userId}


class ProfileContainer extends React.Component{

    componentDidMount() {
        // let userId = 2;
        let userId = this.props.router.params['*'];
        //console.log(this.props)
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                //console.log(response.data)
                this.props.setFriendProfile(response.data);
            });
    }

    render(){
        return <Profile {...this.props} profile = {this.props.profile}/>
    }

}
// wrapper to us react router's v6 hooks in class component (to use HOC pattern, like in router v5)

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
  profile: state.profilePage.profile
})

export default connect( mapStateToProps, { setFriendProfile} )( withRouter( ProfileContainer ) );

// export default connect(mapStateToProps, {setFriendProfile})(ProfileContainer);