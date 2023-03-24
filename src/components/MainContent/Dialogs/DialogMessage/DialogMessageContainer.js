import React from 'react';
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs_reducer";
import DialogMessage from "./DialogMessage";

let ID;


const DialogMessageContainer =({id})=> {
    ID = id;

}


let mapStateToProps = (state) => {
    return{
        newMessageBody: state.dialogsPage.newMessageBody,
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        newMessageChange: (body)=>{
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        },
        sendMessageClick: ()=>{dispatch(sendMessageCreator(ID));}
    }
};



const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(DialogMessage);
export default SuperDialogsContainer;

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