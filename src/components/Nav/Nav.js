import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";


function Nav({store}) {

    const renderFriends = store.getState().sidebar.friends.map(function(elem){
        return  <Friend key = {elem.id}
                    name ={elem.name}
                    url={elem.url}
        />

    })

    const setActive = navData => navData.isActive ? `${classes.active} ${classes.item}` : classes.item;

    return (
        <div className={classes.Nav}>
            <div>
                <div>
                    <NavLink  to="/profile" className={setActive}>My posts</NavLink>
                </div >
                <div>
                    <NavLink to="/dialogs" className={setActive}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to="/news" className={setActive}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className={setActive}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className={setActive}>Settings</NavLink>
                </div>
                <br/><br/>
                <div className={`${classes.item} ${classes.friends}`}>
                    <div>Friends</div>
                    {renderFriends}
                </div>
            </div>

        </div>
    );
}

export default Nav;


