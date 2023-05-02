import React from 'react';
import classes from './DialogMessage.module.css'
import MyMessage from "./myMessage/MyMessage";
import Answer from "./answer/Answer";
import { nanoid } from 'nanoid';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ErrorMessageWrapper} from "../../../../utils/validators/validators";
import * as Yup from "yup";


function DialogMessage({id, myMessages, answers, newMessageBody, sendMessageClick, newMessageChange, sendMessage}){
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


    // const onSendMessage = () => {
    //     sendMessageClick(id);
    //     let chatMessages = document.querySelector('#myMessage');
    //     setTimeout(()=>{
    //         chatMessages.scrollTop = chatMessages.scrollHeight;
    //     }, 0.5)
    //
    // }

    // const onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     newMessageChange(body);
    // }

    // alert(isAuth)

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
                <AddMassageForm sendMessage={sendMessage} id ={id} />
            </div>
        </>
    );

    // return(
    //     <>
    //         <div id='dialogWindow' className={classes.message}>
    //             <div id="myMessage" className={classes.myMessage}>
    //                 {renderMyMessage}
    //             </div>
    //             <div id="Answer" className={classes.Answer}>
    //                 {renderAnswer}
    //             </div>
    //
    //         </div>
    //         <div className={classes.textArea}>
    //             <textarea
    //                 value={newMessageBody}
    //                 onChange={onNewMessageChange}
    //                 cols="30"
    //                 rows="2"
    //             ></textarea>
    //             <input
    //                 // onClick={addSms}
    //                 onClick={onSendMessage}
    //                 type="button"
    //                 value="Send"
    //             />
    //         </div>
    //     </>
    // );
}
const AddMassageForm = ({id, sendMessage}) => {

    const validationSchema = Yup.object().shape( {

        newMessageBody: Yup.string()
            .min( 2, "Must be longer than 2 characters !" )
            .max( 5, "Must be shorter than 5 characters !" )
            .required( "Required !" )
    } );

    const addNewMessage = (values) => {
        sendMessage(id, values );
        let chatMessages = document.querySelector('#myMessage');
        setTimeout(()=>{
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 0.5)

    }

    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                addNewMessage( values.newMessageBody );
                resetForm( {values: ''} );
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={'textarea'}
                            placeholder={'enter text 2'}
                        />
                    </div>
                    <ErrorMessage name="newMessageBody">
                        {ErrorMessageWrapper}
                    </ErrorMessage>

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default DialogMessage;




// если занулить не все нужно до делаем так
// resetForm( {
//    values: {
//       newMessageBody: ''
//    }
// } )


