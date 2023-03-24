import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";




const Profile = ({store}) => {
    return <div>
        <ProfileInfo />
        <MyPostContainer store={store} />
    </div>;
}

export default Profile;