import {nanoid} from "nanoid";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friends : [
        // {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
        // {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
        // {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
        //
    ]
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
            return {...state, friends: [...state.friends ,...action.friends]}
        }
        default:
            return state;
    }


}

export const followActionCreator = (friendID) =>({type: FOLLOW, friendID})
export const unfollowActionCreator = (friendID) =>({type: UNFOLLOW, friendID})
export const setFriendsActionCreator = (friends) =>({type: SET_FRIENDS, friends})


export default friends_reducer;