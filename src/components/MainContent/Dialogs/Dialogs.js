import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Routes, Route} from "react-router-dom";
import {nanoid} from "nanoid";
import DialogMessageContainer from "./DialogMessage/DialogMessageContainer";



function Dialogs({store}) {
     let state = store.getState().dialogsPage;


    const renderDialogs = state.dialogsData.map(function (elem) {
        return  <DialogItem key={elem.id} name={elem.name} id={elem.id} url={elem.url}/> ;
    });

    const renderMessages = state.myMessagesData.map(function(elem){
        let path = "/" + elem.id;

        return (
            <Route
                key={nanoid()}
                path={path}
                element={
                    <DialogMessageContainer
                        id={elem.id}
                        myMessages={elem.myMessages}
                        answers={elem.answers}
                        newMessageBody = {state.newMessageBody}
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


