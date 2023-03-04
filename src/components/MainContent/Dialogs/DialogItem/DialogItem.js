import React from 'react';
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {root} from '../../../../index'



function DialogItem({name, id, url}){

    let path = "/dialogs/" + id;
    return(
        <div className={classes.dialog}>
            <img className={classes.userPhoto} src={url} alt="userPhoto"/>
            <NavLink to={path} onClick={root.render}  className={navData => navData.isActive ? `${classes.active} ${classes.userName}`  : classes.userName }>{name}</NavLink>
        </div>
    );
}

export default DialogItem;