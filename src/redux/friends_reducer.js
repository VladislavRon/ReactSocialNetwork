import {nanoid} from "nanoid";
import {usersAPI} from "../api/friends_api";

// {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
// {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
// {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    friends : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    //когда идет подписка закидываем айди
    followingInProgress: []
}

const friends_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return  {
                ...state,
                //friends: [...state.friends]
                friends: state.friends.map(friend => {
                    if (friend.id === action.friendID){
                        return {...friend, followed: true}
                    }
                    return friend;
                })
            };

        }

        case UNFOLLOW:{
            return  {
                ...state,
                //friends: [...state.friends]
                friends: state.friends.map(friend => {
                    if (friend.id === action.friendID){
                        return {...friend, followed: false}
                    }
                    return friend;
                })
            };
        }

        case SET_FRIENDS:{
            return {...state, friends: action.friends}
        }

        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_COUNT:{
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.friendID ]
                    : state.followingInProgress.filter(id => id!==action.friendID) }
        }

        default:
            return state;
    }


}

export const followSuccess = (friendID) =>({type: FOLLOW, friendID})
export const unfollowSuccess = (friendID) =>({type: UNFOLLOW, friendID})
export const setFriends = (friends) =>({type: SET_FRIENDS, friends})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, friendID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, friendID})

export const getUsersThunk = (currentPage, pageSize)=>{
    return (dispatch)=>{
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data =>{
            dispatch(toggleIsFetching(false));
            dispatch(setFriends(data.items));
            dispatch(setTotalUsersCount(Math.ceil(data.totalCount/150)));
        })
    }
}

export const followThunk = (id)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, id));

        usersAPI.follow(id)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(id));
                }
            dispatch(toggleFollowingProgress(false, id));
        })
    }
}

export const unfollowThunk = (id)=>{
    return (dispatch)=>{
        dispatch(toggleFollowingProgress(true, id));

        usersAPI.unfollow(id)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
        })
    }
}





// export const getUsers = (currentPage, pageSize) => {  // Thunk Creator
//
//     return (dispatch) => {
//
//         dispatch(toggleIsFetching(true));
//
//         usersAPI.getUsers(currentPage, pageSize).then(data => {
//             dispatch(setCurrentPage(currentPage)); //  <<<-----  вот чего не хватало в видео
//             dispatch(toggleIsFetching(false));
//             dispatch(setUsers(data.items));
//             dispatch(setTotalUsersCount(data.totalCount));
//         });
//     }
//
// }

// export const followActionCreator = (friendID) =>({type: FOLLOW, friendID})
// export const unfollowActionCreator = (friendID) =>({type: UNFOLLOW, friendID})
// export const setFriendsActionCreator = (friends) =>({type: SET_FRIENDS, friends})
// export const setCurrentPageActionCreator = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage: currentPage})
// export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
// export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default friends_reducer;