import React, { useState }  from 'react';
import classes from './MyPost.module.css'
import Post from "./Post/Post";

function MyPost({postData}) {
    let [notes, setNotes] = useState(postData);
    let [value, setValue] = useState('');

    let renderPosts = notes.map((elem)=>{
        return <Post
            text = {elem.text}
            likesCount= {elem.likesCount}
        />
    })



    function handleChange(event){
        setValue(event.target.value)
    }

    function addItem(){
        let newElem = {id: `"${notes.length +1}"`, text: `"${value}"`, likesCount: '0'};
        setNotes([...notes, newElem]);
        if(notes.length>=4){
            const copy = Object.assign([], notes);
            copy.splice(0, 1); // так правильно
            setNotes(copy);
        }
    }




    return <div className={classes.posts}>
        <h3>My posts</h3>
        <div className={classes.news}>
            <textarea  cols="30" rows="8" value={value} onChange={handleChange}></textarea>
        </div>
        <input
            onClick={addItem}
            className={classes.newsButton}
            type="button"
            value="Add post"
        />
        <br/><br/>
        <div>
            {renderPosts}
        </div>

    </div>
}

export default MyPost;

