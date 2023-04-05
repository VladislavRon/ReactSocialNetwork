import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator, setUsersTotalCountActionCreator,
    unfollowActionCreator
} from "../../../redux/friends_reducer";



const mapStateToProps = (state) => {
    return{
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follows: (friendID) => {
            dispatch(followActionCreator(friendID))
        },
        unfollow: (friendID) => {
            dispatch(unfollowActionCreator(friendID))
        },
        setFriends: (friends) =>{
            dispatch(setFriendsActionCreator(friends))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(Friends);