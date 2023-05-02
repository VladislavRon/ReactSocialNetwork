import React from 'react';
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";



function Header(props) {
    return (
        <div className={classes.Header}>
            <NavLink to={"/profile"}>
                <div className={classes.logo}></div>
            </NavLink>
            <div className={classes.search_bar}>
                <form>
                    <input type="text" name="search" placeholder="Search..." />
                        <button type="submit">
                            <i className={`${classes.la} ${classes.la_search}`}></i>
                        </button>
                </form>
            </div>
            <div className={classes.log_in}>
                {props.isAuth ?
                    <div className={classes.loginBlockIsAuth} style={{display: 'inline-block'}}>
                        <div className={classes.user_info}>
                            {}<div className={classes.user_picture}></div>
                            <a href="#" title="">{props.login}</a>
                            <button onClick={props.logout}>Log out</button>
                        </div>
                    </div>
                     :
                    <NavLink className={classes.loginBlockNotAuth} to={"/login"}>login</NavLink>
                }
            </div>

        </div>
    );
}

export default Header;