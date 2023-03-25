const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData : [
        {id:0, message: 'Hey, why nobody loves me?', likesCount: '5'},
        {id:1 ,message: 'Hey, why fu loves you?', likesCount: '15'},
        {id:2 ,message: 'Hey, why fu loves you?', likesCount: '1'},
    ],
    newPostText: 'kamasutra'
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }


}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({  type: UPDATE_NEW_POST_TEXT, newText: text })

export default profile_reducer;