import React from 'react';
import {connect} from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setFriendsActionCreator,
    setUsersTotalCountActionCreator,  unfollowActionCreator}
    from "../../../redux/friends_reducer";
import axios from "axios";
import Friends from "./Friends";



class FriendsApiContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(Math.ceil(response.data.totalCount/150));
            });

    }

    onPageChanged = ( pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);

            });
    }


    render(){
        return (
            <Friends
                friends={this.props.friends}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follows={this.props.follows}
                unfollow={this.props.unfollow}

            />
        );
    }
}


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


export default  connect(mapStateToProps, mapDispatchToProps)(FriendsApiContainer);