import classes from "../Profile.module.css";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import {nanoid} from "nanoid";


function ProfileInfo(props){
    if(!props.profile){
        return <Preloader />
    }

    const contacts = Object.entries(props.profile.contacts);
    let lis = contacts.map((elem)=>{
        return <li key={nanoid()}>{elem[0]} <a href='#'>{elem[1]=== null? '': elem[1]}</a> </li>
    })
    return(
        <>
            <div className={classes.mainBanner}></div>
            <div className={classes.user}>
                <div className={classes.user_photo}>
                    <img className={classes.userPhoto} src={props.profile.photos.large} alt="userLogo"/>
                </div>
                <div className={classes.user_desc}>
                    <div className={classes.user_desc_title}>{props.profile.fullName}</div>
                    <div className={classes.user_desc_about}>{props.profile.aboutMe}</div>
                    <ul>{lis}</ul>
                </div>
            </div>
            <br/>
        </>
    );
}

export default ProfileInfo