import React from 'react';
import classes from './FriendsOnline.module.css'




function FriendsOnline({name, url}){


    return (
        <div className={classes.friend}>
            <div  className={classes.friendImg}>
                <img src={url} alt="userLogo"/>
            </div>
            <div className={classes.friendName}>
                {name}
            </div>
        </div>

    );
}

export default FriendsOnline;