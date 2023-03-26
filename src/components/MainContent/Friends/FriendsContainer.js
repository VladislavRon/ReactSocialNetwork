import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {followActionCreator, setFriendsActionCreator, unfollowActionCreator} from "../../../redux/friends_reducer";



const mapStateToProps = (state) => {
    return{
        friends: state.friendsPage.friends,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (friendID) => {
            dispatch(followActionCreator(friendID))
        },
        unfollow: (friendID) => {
            dispatch(unfollowActionCreator(friendID))
        },
        setFriends: (friends) =>{
            dispatch(setFriendsActionCreator(friends))
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Friends);