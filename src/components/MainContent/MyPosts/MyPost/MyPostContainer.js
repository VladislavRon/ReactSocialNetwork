import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile_reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return{
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
            },
        addPost: ()=>{dispatch(addPostActionCreator())}

    }
}

const SuperMyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default SuperMyPostContainer;


// const MyPostContainer = ({store}) => {
//     //let state = store.getState();
//
//     let addPost = () => {
//         store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         store.dispatch(action);
//     }
//
//
//     return <MyPost
//         postData={state.profilePage.postData}
//         newPostText={state.profilePage.newPostText}
//         updateNewPostText={onPostChange}
//         addPost={addPost}
//     />
// }

//export default MyPostContainer;

