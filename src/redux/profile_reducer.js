import {profileAPI} from "../api/profile_api";

const ADD_POST = 'ADD_POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE';
//4. initialState status: "",    SET_STATUS = "SET_STATUS" -> down
const SET_STATUS = "SET_STATUS";
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData : [
        {id:0, message: 'Hey, why nobody loves me?', likesCount: '5'},
        {id:1 ,message: 'Hey, why fu loves you?', likesCount: '15'},
        {id:2 ,message: 'Hey, why fu loves you?', likesCount: '1'},
    ],
    //newPostText: '',
    profile: null,
    status: null
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let nextIdMessages = state.postData.length + 1
            let newPost = {
                id: nextIdMessages + action.newPostText,
                message: action.newPostText,
                likesCount: 552
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                // newPostText: ''
            };
        }
        // case UPDATE_NEW_POST_TEXT:{
        //     return{
        //         ...state,
        //         newPostText: action.newText
        //     }
        // }
        case SET_FRIEND_PROFILE:{
            return{
                ...state,
                profile: action.profile
            }
        }
        //5.caseSET_STATUS -> actionCreator
        case SET_STATUS:{
            return{
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter( p => p.id !== action.postId )
            }

        default:
            return state;
    }


}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPostActionCreator = (newPostText) =>  ({type: ADD_POST, newPostText})
const setFriendProfile = (profile) =>  ({  type: SET_FRIEND_PROFILE, profile: profile })


export const getProfileThunk = (userId) =>   async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setFriendProfile(response.data));
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

const setStatus = (status) =>  ({  type: SET_STATUS, status})

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}



//export const updateNewPostTextActionCreator = (text) => ({  type: UPDATE_NEW_POST_TEXT, newText: text })

//6. actionCreator -> Sunk getStatus , updateStatus -> 7закидываем санки в profileContainer


export default profile_reducer;

// export const getProfileThunk = (userId) => {
//     return (dispatch) => {
//         profileAPI
//             .getProfile(userId)
//             .then(data => {
//                 dispatch(setFriendProfile(data));
//             });
//     }
// }
//
// export const getUserProfile = (userId) => {
//     return (dispatch) => {
//         profileAPI.getStatus(userId)
//             .then(response => {
//                 dispatch(setStatus(response.data));
//             });
//     }
// }
//
// const setStatus = (status) =>  ({  type: SET_STATUS, status})
//
// export const updateStatus = (status) => {
//     return (dispatch) => {
//         profileAPI.updateStatus(status)
//             .then(response => {
//                 if(response.data.resultCode === 0){
//                     dispatch(setStatus(status));
//                 }
//             });
//     }
// }