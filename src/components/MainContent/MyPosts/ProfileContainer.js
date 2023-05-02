import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUserProfile, updateStatus} from "../../../redux/profile_reducer";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


//https://social-network.samuraijs.com/api/1.0/profile/{userId}


class ProfileContainer extends React.Component{

    componentDidMount() {
        //console.log(this.props)
        let userId = this.props.router.params['*'];

        if (!userId) {
           // userId = 28856;
            userId = this.props.authorisedUserId;
        }
        this.props.getProfileThunk(userId);

        //2.getUserStatus(userId) -> 3 down
            this.props.getUserProfile(userId);


        // profileAPI
        //     .getProfile(userId)
        //     .then(data => {
        //         //console.log(response.data)
        //         this.props.setFriendProfile(data);
        //     });
    }

    render(){
        // if (this.props.isAuth === false) {
        //     return <Navigate to={'/login'} />
        // }

        // 8.прокидываем status updateStatus в пропсы -> Profile
        return <Profile
            {...this.props}
            profile = {this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
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

    //3.state.profilePage.status -> profile_reducer,

    status: state.profilePage.status,
    authorisedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

//with compose 70lesson
//порядок походу не важен хз, хотя Димыч говорит снизу вверх...
export default compose(
    // 7.закидываем санки в connect {getStatus, updateStatus}
    connect( mapStateToProps, {getProfileThunk, getUserProfile, updateStatus} ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

//without compose 69lesson
// let AuthRedirectComponent = withAuthRedirect( ProfileContainer );
// export default connect( mapStateToProps, {getProfileThunk} )( withRouter( AuthRedirectComponent ) );





// export default connect( mapStateToProps, { setFriendProfile, getProfileThunk} )( withRouter( ProfileContainer ) );

// export default connect(mapStateToProps, {setFriendProfile})(ProfileContainer);