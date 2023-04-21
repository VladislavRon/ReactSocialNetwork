const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE';
let initialState = {
    postData : [
        {id:0, message: 'Hey, why nobody loves me?', likesCount: '5'},
        {id:1 ,message: 'Hey, why fu loves you?', likesCount: '15'},
        {id:2 ,message: 'Hey, why fu loves you?', likesCount: '1'},
    ],
    newPostText: 'kamasutra',
    profile: null
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newText
            }
        }
        case SET_FRIEND_PROFILE:{
            return{
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }


}

export const setFriendProfile = (profile) =>  ({  type: SET_FRIEND_PROFILE, profile: profile })
export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({  type: UPDATE_NEW_POST_TEXT, newText: text })

export default profile_reducer;