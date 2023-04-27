import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";




const Profile = (props) => {
    return <div>
        {/*9.прокидываем status updateStatus в пропсы -> Profile*/}
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostContainer  />
    </div>;
}

export default Profile;