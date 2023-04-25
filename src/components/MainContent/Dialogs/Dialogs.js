import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Routes, Route} from "react-router-dom";
import {nanoid} from "nanoid";
import DialogMessageContainer from "./DialogMessage/DialogMessageContainer";
import { Navigate } from "react-router-dom";

function Dialogs({store}) {

    let state = store.getState().dialogsPage;

    //redirect to login
    let isAuth = store.getState().auth.isAuth;
    if(!isAuth){ return <Navigate to={'/login'} /> }


    const renderDialogs = state.dialogsData.map(function (elem) {
        return <DialogItem key={elem.id} name={elem.name} id={elem.id} url={elem.url}/>;
    });

    const renderMessages = state.myMessagesData.map(function (elem) {
        let path = "/" + elem.id;

        return (
            <Route
                key={nanoid()}
                path={path}
                element={
                    <DialogMessageContainer
                        // эти данные прийдут аж в презентационную компоненту, в самурайском коде все в одном файле и такой ситуации нет
                        id={elem.id}
                        myMessages={elem.myMessages}
                        answers={elem.answers}
                        newMessageBody={state.newMessageBody}
                        isAuth={isAuth}
                    />
                }
            />

        );

    })




    return (
        <div className={classes.dialogs}>
            <div className={classes.people}>
                {renderDialogs}
            </div>
            <div  className={classes.message}>
                <Routes>
                    {renderMessages}
                </Routes>
            </div>
        </div>
    );
}

export default Dialogs;


