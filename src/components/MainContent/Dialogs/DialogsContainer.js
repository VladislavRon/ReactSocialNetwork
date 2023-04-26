import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect, withAuthRedirectForDialogs} from "../../hoc/withAuthRedirect";





const DialogsContainer = (props) => {

    return <Dialogs store = {props.store}/>
}




export default DialogsContainer;