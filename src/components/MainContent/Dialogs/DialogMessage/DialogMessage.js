import React from 'react';
import classes from './DialogMessage.module.css'
import MyMessage from "./myMessage/MyMessage";
import Answer from "./answer/Answer";
import { nanoid } from 'nanoid';



function DialogMessage({ myMessages, answers, newMessageBody, sendMessageClick, newMessageChange}){
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
        sendMessageClick();
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        newMessageChange(body);
    }

    return(
        <>
            <div className={classes.message}>
                {renderMyMessage}
                {renderAnswer}
            </div>
            <div className={classes.textArea}>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}

                    cols="30"
                    rows="8"
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


