import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    function RedirectComponent (props){
        if(!props.isAuth){
            return <Navigate to={'/login'} />
        }
        return <Component {...props} />
    }

    const mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })
    return connect(mapStateToPropsForRedirect)(RedirectComponent);


}

