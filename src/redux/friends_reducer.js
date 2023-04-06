import {nanoid} from "nanoid";

// {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
// {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
// {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    friends : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const friends_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return  {
                ...state,
                //friends: [...state.friends]
                friends: state.friends.map(friend => {
                    if (friend.id === action.friendID){
                        return {...friend, followed: !friend.followed}
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
                        return {...friend, followed: !friend.followed}
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

        default:
            return state;
    }


}

export const followActionCreator = (friendID) =>({type: FOLLOW, friendID})
export const unfollowActionCreator = (friendID) =>({type: UNFOLLOW, friendID})
export const setFriendsActionCreator = (friends) =>({type: SET_FRIENDS, friends})
export const setCurrentPageActionCreator = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default friends_reducer;