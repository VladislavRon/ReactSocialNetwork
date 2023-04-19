import React from 'react';
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator, setFriendsActionCreator,
    setUsersTotalCountActionCreator, toggleIsFetchingAC, unfollowActionCreator
}
    from "../../../redux/friends_reducer";
import axios from "axios";
import Friends from "./Friends";
import Preloader from "../../common/Preloader/Preloader";


class FriendsApiContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(Math.ceil(response.data.totalCount/150));
            });

    }

    onPageChanged = ( pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items);
            });
    }

   // https://loading.io/mod/spinner/atom/index.svg


    render(){
        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                <Friends
                    friends={this.props.friends}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follows={this.props.follows}
                    unfollow={this.props.unfollow}

                />}
            </>

        );
    }
}


const mapStateToProps = (state) => {
    return{
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
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
        },
        toggleIsFetching: (isFetching) =>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(FriendsApiContainer);