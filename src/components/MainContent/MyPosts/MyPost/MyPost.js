import React, {} from 'react';
import classes from './MyPost.module.css'
import Post from "./Post/Post";
import { nanoid } from 'nanoid';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ErrorMessageWrapper} from "../../../../utils/validators/validators";





const MyPost = ({postData, addPost}) => {
    //console.log('render my post')
    let postsElements = postData.map( p => <Post
        key={nanoid()}
        message={p.message}
        likesCount={p.likesCount}
    />);

    return <div className={classes.posts}>
        <h3>My posts</h3>

        <AddNewPostForm addPost={addPost}/>

        <div id="div" className={classes.postsBox}>
            { postsElements }
        </div>
    </div>
}



const AddNewPostForm = (props) => {
    const validationSchema = Yup.object().shape({
        newPostText: Yup.string()
            .min(1, "Must be longer than 1 characters !")
            .max(15, "Must be shorter than 15 characters !")
            .required("Required !")
    });

    const OnAddPost = (values) => {
        props.addPost(values);
        let chatMessages = document.querySelector('#div');
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 0.5)
    }

    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                OnAddPost( values.newPostText );
                resetForm( {values: ''} );
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newPostText'}
                            as={'textarea'}
                            placeholder={'enter text 1'}
                        />
                    </div>

                    <ErrorMessage name="newPostText">
                        {ErrorMessageWrapper}
                    </ErrorMessage>

                    <button type={'submit'}>Add posts</button>
                </Form>
            )}
        </Formik>
    )
}


export default MyPost;



//{postData, newPostText, updateNewPostText, addPost}

// let newPostElement = React.createRef();
//
// let onAddPost = () => {
//     addPost();
//     let chatMessages = document.querySelector('#div');
//     setTimeout(()=>{
//         chatMessages.scrollTop = chatMessages.scrollHeight;
//     }, 0.5)
//
// }
//
// let onPostChange = () => {
//     let text = newPostElement.current.value;
//     updateNewPostText(text);
// }

{/*<div className={classes.news}>*/}
{/*    <textarea*/}
{/*        onChange={onPostChange}*/}
{/*        //нативный js метод фокус - ref*/}
{/*        ref={newPostElement}*/}
{/*        value={newPostText}*/}
{/*    />*/}
{/*</div>*/}
{/*<button onClick={onAddPost}>Add post</button>*/}
{/*<br/><br/>*/}
