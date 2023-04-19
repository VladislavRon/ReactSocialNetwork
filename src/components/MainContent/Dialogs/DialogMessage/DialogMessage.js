import React from 'react';
import classes from './DialogMessage.module.css'
import MyMessage from "./myMessage/MyMessage";
import Answer from "./answer/Answer";
import { nanoid } from 'nanoid';



function DialogMessage({id, myMessages, answers, newMessageBody, sendMessageClick, newMessageChange}){
    // let [value2, setValue2] = useState('');
    // const [notesMyMessages, setNotesMyMessages] = useState(myMessages);
    // const [notesMyAnswers, setNotesMyAnswers] = useState(answers);




    const renderMyMessage = myMessages.map((elem) => {
        return <MyMessage
            key={nanoid()}
            message={elem.message}
            likesCount={elem.likesCount}
        />
    });

    const renderAnswer = answers.map((elem) => {
        return <Answer
            key={nanoid()}
            message={elem.message}
            likesCount={elem.likesCount}
        />
    });


    const onSendMessage = () => {
        sendMessageClick(id);
        let chatMessages = document.querySelector('#myMessage');
        setTimeout(()=>{
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 0.5)

    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        newMessageChange(body);
    }

    return(
        <>
            <div id='dialogWindow' className={classes.message}>
                <div id="myMessage" className={classes.myMessage}>
                    {renderMyMessage}
                </div>
                <div id="Answer" className={classes.Answer}>
                    {renderAnswer}
                </div>

            </div>
            <div className={classes.textArea}>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    cols="30"
                    rows="2"
                ></textarea>
                <input
                    // onClick={addSms}
                    onClick={onSendMessage}
                    type="button"
                    value="Send"
                />
            </div>
        </>
    );
}

export default DialogMessage;


