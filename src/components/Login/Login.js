import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
//формик избавляет нас от работы со стейт, с ошибками и состоянием разных полей
//йап управляет валидацией, имеет кучу методов для валидации пароля имейла и тд

const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required 1';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
//т.к формик содержит обьект пользуемся методом для обьектов и в shape передать ее форму
const validationSchemaLoginForm = Yup.object().shape( {
    //тестируем name
    //name: Yup.string.typeError('DolznoBitStrokoi').required('Oboviazkovo!!!')
    //name: Yup.number.typeError('DolznoBit4islom').required('Oboviazkovo!!!')
    //тестируем на пароль
    password: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 5, "Must be shorter than 5 characters" )
        .required( "Required 2" )
} );


const Login = () => {

    return (
        <div>
            <h2> ... Login  </h2>

            <Formik
                //начальные значения, если их не перечислить будет ругаться реакт
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                //validateOnblur //когда будет валидироваться форма, например при переходе на др инпут
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                //метод который будет вызывать функцию при отправке сообщение
                onSubmit={(values) => {
                    console.log( values )
                }}
            >

                {() => (
                    <Form>

                        <div>
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'e-mail'}
                            />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'password'}
                            />
                        </div>
                        <ErrorMessage name="password" component="div" />

                        <div>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe'
                            />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <button type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>

            <div>
                ...
            </div>

        </div>
    )
}


export default Login;
//https://www.youtube.com/watch?v=K6f8GAhLGKA&ab_channel=%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%A7%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2
// {/*formik это функция, сдесь у нас обьект, внутри значения, ошибки, тронут, была-ли-изменена
//                  форма, хендел привязаный к параметру отправки формы, он будет вызывать ф onSubmit,
//                  dirty - изменялись ли когдато значения в форма
//                 {({values, errors,touched, handleChange,handleBlur, isValid, handleSubmit, dirty})=>{
//                         <div className={'form'}>
//                             <p>
//                                 <label htmlFor={`name`}>Имя</label>
//                                 <input
//                                     className={classes.input}
//                                     type={`text`}
//                                     name={`name`}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     value={values.name}
//                                 />
//                             </p>
//                             {touched.name && errors.name && <p className={`error`}>{errors.name}</p> }
//                             <button
//                                 disabled={!isValid && !dirty}
//                                 onClick={handleSubmit}
//                                 type={`submit`}
//                             >Send</button>
//                         </div>}}
// */}