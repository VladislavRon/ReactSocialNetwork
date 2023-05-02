import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Routes, Route, Navigate} from "react-router-dom";
import {nanoid} from "nanoid";
import DialogMessageContainer from "./DialogMessage/DialogMessageContainer";


function Dialogs({store}) {
    //без этого запроса не обойтись,
    // без стора не добыть стейта именно в таком ветвлении компонентов, а не как у Димыча
    let state = store.getState().dialogsPage;

    //тут проверял вошли мы в аккаут или нет,
    //redirect to log in
    // let isAuth = store.getState().auth.isAuth;
    // if(!isAuth){ return <Navigate to={'/login'} /> }


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


