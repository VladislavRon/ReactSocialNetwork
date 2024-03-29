import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {

    return <>
        <div className={classes.post}>
            <span className={classes.round}></span>
            <span>{ props.message }</span>
            <br/>
            <span><img style={{height: '15px'}} src="data:image/png;base64,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" alt="likes"/></span>
            { props.likesCount }
        </div>
    </>


}

export default Post;