import React, {useState} from 'react';
import classes from './DialogMessage.module.css'
import MyMessage from "./myMessage/MyMessage";
import Answer from "./answer/Answer";


function DialogMessage({id, myMessages, answers, addMyMessage}){
    //let [value2, setValue2] = useState('');
    // const [notes2, setNotes2] = useState(myMessages);

    let newPostElement = React.createRef();
    let addPost = () =>{
        let text = newPostElement.current.value;
        addMyMessage(id,text);

    }


    let renderMyMessage = myMessages.map(function(elem){
        return <MyMessage

            message={elem.message}
            likesCount={elem.likesCount}
        />
    });

    let renderAnswer = answers.map((elem) => {
        return <Answer
            message={elem.message}
            likesCount={elem.likesCount}
        />
    });


    // function addSms(){
    //     let newElem = {id: `"${notes2.length +1}"`, message: `"${value2}"`, likesCount: '0'};
    //     setNotes2([...notes2, newElem]);
    // }

    return(
        <>
            <div className={classes.message}>
                {renderMyMessage}
                {renderAnswer}
                <div className={classes.textArea}>
                <textarea

                    ref={newPostElement}
                    cols="60"
                    rows="2"
                    placeholder={`dialog with ${id}`}
                ></textarea>
                    <input
                        onClick={addPost}
                        type="button"
                        value="Send"
                    />
                </div>
            </div>

        </>
    );
}

export default DialogMessage;


