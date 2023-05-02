import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {ErrorMessageWrapper, validateEmailField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Navigate} from "react-router-dom";
import Style from '../../utils/validators/ErrorMessage.module.css';


//формик избавляет нас от работы со стейт, с ошибками и состоянием разных полей
//йап управляет валидацией, имеет кучу методов для валидации пароля имейла и тд

const LoginPage = (props) => {

    const validationSchema = Yup.object().shape( {

        password: Yup.string()
            .min( 2, "Must be longer than 2 characters" )
            .max( 5, "Must be shorter than 15 characters" )
            .required( "Required 2" )
    } );

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h2> ... Login page </h2>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    general: ''
                }}
                validate={validateEmailField}
                validationSchema={validationSchema}

                onSubmit={(values, bagWithMethods) => {

                    let {setStatus, setFieldValue, setSubmitting} = bagWithMethods;

                    props.login(
                        values.email,
                        values.password,
                        values.rememberMe,
                        setStatus,
                        setFieldValue,
                        setSubmitting );

                }}
            >
                {props => {

                    let {status, values, isSubmitting} = props;

                    //console.log( status );
                    //console.log( values.general );
                    console.log( props.isSubmitting );

                    return (
                        <Form>

                            <div>

                                {values.general &&
                                    <div>
                                        _.{values.general} - with setFieldValue
                                    </div>}

                                {status &&
                                    <div className={Style.validationErrorMessage}>
                                        ..{status} - with setStatus
                                    </div>}

                                <div>
                                    <Field
                                        name={'email'}
                                        type={'text'}
                                        placeholder={'e-mail'} />
                                </div>
                                <ErrorMessage name="email">
                                    {ErrorMessageWrapper}
                                </ErrorMessage>

                                <div>
                                    <Field
                                        name={'password'}
                                        type={'password'}
                                        placeholder={'password'} />
                                </div>
                                <ErrorMessage name="password">
                                    {ErrorMessageWrapper}
                                </ErrorMessage>

                                <div>
                                    <Field
                                        type={'checkbox'}
                                        name={'rememberMe'}
                                        id='rememberMe' />
                                    <label htmlFor={'rememberMe'}> remember me </label>
                                </div>

                                <button type={'submit'}
                                        disabled={isSubmitting}
                                >{isSubmitting ? "Please wait..." : "Submit"}</button>

                            </div>


                        </Form>
                    )
                }
                }
            </Formik>

            <div>
                ...
            </div>


        </div>
    )
}


const mapStateToProps = (state) => (
    {isAuth: state.auth.isAuth}
);

const LoginPageConnect = connect( mapStateToProps, {login} )( LoginPage );

export default LoginPageConnect;



// так пишем если ошибку вывести без красного шрифта
// <ErrorMessage name="email" component="div" />
// lel = {errors, touched, isValid, dirty, status} = props;



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
//т.к формик содержит обьект пользуемся методом для обьектов и в shape передать ее форму
//тестируем name
//name: Yup.string.typeError('DolznoBitStrokoi').required('Oboviazkovo!!!')
//name: Yup.number.typeError('DolznoBit4islom').required('Oboviazkovo!!!')