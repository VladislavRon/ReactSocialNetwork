import React, {} from 'react';
import classes from './MyPost.module.css'
import Post from "./Post/Post";
import { nanoid } from 'nanoid';






const MyPost = ({postData, newPostText, updateNewPostText, addPost}) => {

    let postsElements = postData.map( p => <Post key={nanoid()} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        addPost();
        let chatMessages = document.querySelector('#div');
        setTimeout(()=>{
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 0.5)

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }


    return <div className={classes.posts}>
        <h3>My posts</h3>
        <div className={classes.news}>
            <textarea
                onChange={onPostChange}
                //нативный js метод фокус - ref
                ref={newPostElement}
                value={newPostText}
            />
        </div>
        <button onClick={onAddPost}>Add post</button>
        <br/><br/>
        <div id="div" className={classes.postsBox}>
            { postsElements }
        </div>

    </div>
}

export default MyPost;

