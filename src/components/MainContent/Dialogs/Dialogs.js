import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Routes, Route} from "react-router-dom";



function Dialogs({dialogsData, myMessagesData, answerData}) {


    const renderDialogs = dialogsData.map(function (elem) {

        return (
                <DialogItem key={elem.id} name={elem.name} id={elem.id} url={elem.url}/>
        );
    })



    const renderMessages = myMessagesData.map(function(elem){
        let path = "/" + elem.id;

        return (
            <Route
                key={elem.id}
                path={path}
                element={
                    <DialogMessage
                        key={elem.id}
                        message={elem.message}
                        likesCount={elem.likesCount}
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


