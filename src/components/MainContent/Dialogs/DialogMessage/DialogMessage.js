import React, {useState} from 'react';
import classes from './DialogMessage.module.css'
import MyMessage from "./myMessage/MyMessage";
import Answer from "./answer/Answer";


function DialogMessage({myMessages, answers}){
    let [value2, setValue2] = useState('');
    const [notes2, setNotes2] = useState(myMessages);


    const renderMyMessage = notes2.map((elem) => {
        return <MyMessage
            id={elem.id}
            message={elem.message}
            likesCount={elem.likesCount}
        />
    });
    const renderAnswer = answers.map((elem) => {
        return <Answer
            id={elem.id}
            message={elem.message}
            likesCount={elem.likesCount}
        />
    });


    function addSms(){
        let newElem = {id: `"${notes2.length +1}"`, message: `"${value2}"`, likesCount: '0'};
        setNotes2([...notes2, newElem]);

    }

    return(
        <>
            <div className={classes.message}>
                {renderMyMessage}
                {renderAnswer}

            </div>
            <div className={classes.textArea}>
                <textarea
                    value={value2}
                    onChange={event => {setValue2(event.target.value)}}
                    cols="30"
                    rows="8"
                ></textarea>
                <input
                    onClick={addSms}
                    type="button"
                    value="Send"
                />
            </div>
        </>
    );
}

export default DialogMessage;


