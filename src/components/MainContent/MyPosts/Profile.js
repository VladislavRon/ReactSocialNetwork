import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";




const Profile = ({profile, status, updateStatus}) => {
    //console.log('render profile')
    return <div>
        {/*9.прокидываем status updateStatus в пропсы -> Profile*/}
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostContainer  />
    </div>;
}

export default Profile;