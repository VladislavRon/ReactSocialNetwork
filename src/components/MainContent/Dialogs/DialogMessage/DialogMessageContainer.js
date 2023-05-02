import React from 'react';
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_reducer";
import DialogMessage from "./DialogMessage";




let mapStateToProps = (state) => {
    return{
        //newMessageBody: state.dialogsPage.newMessageBody,
        dialogsPage: state.dialogsPage,

    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        // newMessageChange: (body)=>{
        //     let action = updateNewMessageBodyCreator(body);
        //     dispatch(action);
        // },
        // sendMessageClick: (ID)=>{dispatch(sendMessageCreator(ID));}
        sendMessage: (ID, newMessageBody)=>{
            dispatch(sendMessageCreator(ID, newMessageBody));
        }
    }
};



const DialogMessageContainer = connect(mapStateToProps,mapDispatchToProps)(DialogMessage);
export default DialogMessageContainer;

// function DialogMessageContainer({id, myMessages, answers, newMessageBody, dispatch}){
//
//
//     const onSendMessageClick = () => {
//         dispatch(sendMessageCreator(id));
//     }
//
//     const onNewMessageChange = (body) => {
//         dispatch(updateNewMessageBodyCreator(body));
//     }
//
//
//     return(
//         <DialogMessage
//             myMessages={myMessages}
//             answers={answers}
//             newMessageBody = {newMessageBody}
//             dispatch={dispatch}
//             newMessageChange={onNewMessageChange}
//             sendMessageClick={onSendMessageClick}
//         />
//     );
//
// }

//export default DialogMessageContainer;