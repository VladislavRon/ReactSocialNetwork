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
                {!props.isAuth ?
                    <NavLink to={"/login"}>login</NavLink> :
                    <div className={classes.user_account} style={{display: 'inline-block'}}>
                        <div className={classes.user_info}>
                            <div className={classes.user_picture}></div>
                            <a href="#" title="">{props.login}</a>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

export default Header;