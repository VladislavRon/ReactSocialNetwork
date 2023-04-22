import React from 'react';
import {connect} from "react-redux";
import {
    follows, setCurrentPage, setFriends,
    setTotalUsersCount, toggleIsFetching, unfollow
}
    from "../../../redux/friends_reducer";
import axios from "axios";
import Friends from "./Friends";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../../api/api";



class FriendsApiContainer extends React.Component{

    async componentDidMount() {
        this.props.toggleIsFetching(true);
        let currentPage = this.props.currentPage;
        let pageSize = this.props.pageSize;
        let data = await usersAPI.getUsers(currentPage, pageSize);
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
            this.props.setTotalUsersCount(Math.ceil(data.totalCount/150));


    }

    onPageChanged = ( pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        let pageSize = this.props.pageSize;
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
        });
    }

    // componentDidMount() {
    //     this.props.toggleIsFetching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setFriends(response.data.items);
    //             this.props.setTotalUsersCount(Math.ceil(response.data.totalCount/150));
    //         });
    //
    // }
    //
    // onPageChanged = ( pageNumber) => {
    //     this.props.toggleIsFetching(true);
    //     this.props.setCurrentPage(pageNumber);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setFriends(response.data.items);
    //         });
    // }




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

export default  connect(mapStateToProps, {
    follows, unfollow, setFriends, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(FriendsApiContainer);


//если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC,
// то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."

//если экшнкриэйторы и то что мы передаем мы назовем одинаково, то код еще можно сократить до пздц


// export default  connect(mapStateToProps, {
//     follows: followActionCreator,
//     unfollow: unfollowActionCreator,
//     setFriends: setFriendsActionCreator,
//     setCurrentPage: setCurrentPageActionCreator,
//     setTotalUsersCount: setUsersTotalCountActionCreator,
//     toggleIsFetching: toggleIsFetchingAC
// })(FriendsApiContainer);


// const mapDispatchToProps = (dispatch) => {
//     return {
//         follows: (friendID) => {
//             dispatch(followActionCreator(friendID))
//         },
//         unfollow: (friendID) => {
//             dispatch(unfollowActionCreator(friendID))
//         },
//         setFriends: (friends) =>{
//             dispatch(setFriendsActionCreator(friends))
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
//
//
// export default  connect(mapStateToProps, mapDispatchToProps)(FriendsApiContainer);
