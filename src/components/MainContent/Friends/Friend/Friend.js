import React from 'react';
import classes from './Friend.module.css'




function Friend({id,fullName,location,followed,status,avatar, follow, unfollow}){


    return (
        <>
            <div>
                <img src={avatar} alt="friendPhoto"/>
            </div>
            <div>
                {fullName}
            </div>
            <div>
                {location.country}
            </div>
            <div>
                {location.city}
            </div>
            <div>
                {status}
            </div>
            <div>
                {followed
                    ?  <button onClick={()=>{follow(id)}}>follow</button>
                    :  <button onClick={()=>{unfollow(id)}}>unfollow</button>
                }
            </div>
            <br/>
        </>
    );
}

export default Friend;

