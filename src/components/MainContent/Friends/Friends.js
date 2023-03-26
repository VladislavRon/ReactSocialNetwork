import React from 'react';
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";
import {nanoid} from "nanoid";




function Friends({friends, follow, unfollow, setFriends}){

    if(friends.length === 0){
        setFriends([
            {id: nanoid(), fullName: 'Dmitri K', location: {country:'Germany', city:'Berlin'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
            {id: nanoid() ,fullName: 'Olga J', location: {country:'France', city:'Paris'}, followed: false,  status: 'offline', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
            {id: nanoid() ,fullName: 'Vladislav O', location: {country:'Ukraine', city:'Kiev'}, followed: true,  status: 'online', avatar: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},

        ])
    }


    const friendsRender = friends.map(friend =>{
        return(
            <Friend
                key= {friend.id}
                id= {friend.id}
                fullName= {friend.fullName}
                location= {friend.location}
                followed= {friend.followed}
                status= {friend.status}
                avatar= {friend.avatar}
                follow={follow}
                unfollow={unfollow}
                setFriends={setFriends}
            />
        )
    })

    return (
        <>
            <div>
                {friendsRender}
            </div>
            <button>Show more</button>
        </>


    );
}

export default Friends;