import classes from "../Profile.module.css";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import {nanoid} from "nanoid";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";




function ProfileInfo(props){
    if(!props.profile){
        return <Preloader />
    }
    //преобразовал обьект в массив, что бы отрисовать
    const contacts = Object.entries(props.profile.contacts);
    let lis = contacts.map((elem)=>{
        return <li key={nanoid()}>{elem[0]} <a href='#'>{elem[1]=== null? '': elem[1]}</a> </li>
    })
    return(
        <>
            <div className={classes.mainBanner}></div>
            <div className={classes.user}>
                <div className={classes.user_photo}>
                    <img className={classes.userPhoto} src={props.profile.photos.large ? props.profile.photos.large : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="userLogo"/>
                </div>
                <div className={classes.user_desc}>
                    <div className={classes.user_desc_title}>{props.profile.fullName}</div>
                    <div className={classes.user_desc_about}>{props.profile.aboutMe}</div>

                    {/*компонента статуса*/}
                    {/*10.прокидываем status в ProfileStatus*/}
                    {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    <ul>{lis}</ul>
                </div>
            </div>
            <br/>
        </>
    );
}

export default ProfileInfo