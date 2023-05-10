import React from 'react';
import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunk,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowThunk
} from "../../../redux/friends_reducer";
import Friends from "./Friends";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getFriendsSelector,
    getIsFetching,
    getPageSize,
    getUsersCount
} from "../../../redux/friends-selectors";


class FriendsContainer extends React.Component{

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize);

        // this.props.toggleIsFetching(true);
        // let currentPage = this.props.currentPage;
        // let pageSize = this.props.pageSize;
        // usersAPI.getUsers(currentPage, pageSize).then(data =>{
        //     this.props.toggleIsFetching(false);
        //     this.props.setFriends(data.items);
        //     this.props.setTotalUsersCount(Math.ceil(data.totalCount/150));
        // })
    }

    onPageChanged = ( pageNumber) => {
        let {setCurrentPage, getUsersThunk, pageSize} = this.props;
        setCurrentPage(pageNumber);
        getUsersThunk(pageNumber, pageSize);

        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setFriends(data.items);
        // });

    }


    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setFriends(response.data.items);
    //             this.props.setTotalUsersCount(Math.ceil(response.data.totalCount/150));

    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
    //         withCredentials: true
    //     })
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setFriends(response.data.items);




    render(){
        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                <Friends
                    onPageChanged={this.onPageChanged}
                    {...this.props}
                />}
            </>

        );
    }
}

//Билиотека reselect - селекторы с одной стороны помогают, но заставляют чаще перерисовывать
const mapStateToProps = (state) => {

    return{
        friends: getFriendsSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        //isAuth: state.auth.isAuth
    }
}


//with сompose 70 lesson
//порядок походу не важен хз, хотя Димыч говорит снизу вверх...
export default  compose(
   // withAuthRedirect,
    connect(mapStateToProps, {
        followThunk, unfollowThunk, setCurrentPage,  toggleFollowingProgress, getUsersThunk
    })

)(FriendsContainer)


//без функции сompose 69 lesson
// let AuthRedirectComponentFriends = withAuthRedirect( FriendsContainer);
//
// export default  connect(mapStateToProps, {
//     followThunk, unfollowThunk, setCurrentPage,  toggleFollowingProgress, getUsersThunk
// })(AuthRedirectComponentFriends);

//когда вынесли код в санку удаляем от сюда половину экспортов
// export default  connect(mapStateToProps, {
//     follows, unfollow, setFriends,
//     setCurrentPage, setTotalUsersCount, toggleIsFetching,
//     toggleFollowingProgress,  getUsersThunkCreator
// })(FriendsApiContainer);

//Реакт видя классовую компоненту создает обьект!
//FriendsContainer содержит только коннект, он передает все в новую компоненту FriendsApiContainer, она дальше в Friends
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
