import React from 'react';
import classes from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




function Profile({postData}) {
    return <div>
        <ProfileInfo />
        <MyPost
            postData = {postData}
        />
    </div>;
}

export default Profile;