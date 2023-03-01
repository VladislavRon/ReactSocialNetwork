import classes from "../Profile.module.css";
import React from "react";


function ProfileInfo(){
    return(
        <>
            <div className={classes.mainBanner}></div>
            <div className={classes.user}>
                <img className={classes.userPhoto} src="https://gambolthemes.net/workwise-new/images/resources/user-pic.png" alt="userLogo"/>
                <span>Dmitriy</span>
                <br/><br/>
                <span>Date City Education</span>
            </div>
            <br/>
        </>
    );
}

export default ProfileInfo