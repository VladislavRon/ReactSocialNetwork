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
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;

}

export const withAuthRedirectForDialogs = (Component) => {
    function RedirectComponent (props){
        if(!props.isAuth){
            return <Navigate to={'/login'} />
        }
        return <Component {...props} />
    }


    return RedirectComponent;

}