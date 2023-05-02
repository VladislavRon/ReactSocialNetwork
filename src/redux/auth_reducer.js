import {profileAPI} from "../api/profile_api";
import {setFriendProfile} from "./profile_reducer";
import {authAPI} from "../api/auth_api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false


}

const auth_reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,
                ...action.payload,
                isAuth: true
            }
        }

        default:
            return state;
    }

}

export const setAuthUserData = (id, email, login, isAuth) =>({
    type: SET_USER_DATA,
    //data:{id, email, login}
    payload: {id, login, email, isAuth}
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if(data.resultCode === 0){
                    let {id, email, login} = data.data;
                    //dispatch(setAuthUserData(id, email, login));
                    dispatch( setAuthUserData( id, login, email, true ) );
                }
            });
    }
}

export const login = (email, password, rememberMe, setStatus, setFieldValue, setSubmitting) => (dispatch) => {

    authAPI.logIn( email, password, rememberMe )
        .then( response => {

            let resultCode = response.data.resultCode;

            if (resultCode === 0) {
                dispatch( getAuthUserData() );
            } else {

                let textError = `resultCode: ${resultCode} - ${response.data.messages.join()}`;

                setStatus( textError );
                //setFieldValue("general", textError)
                setSubmitting( false );

            }

        } );

}

export const logout = () => (dispatch) => {

    authAPI.logOut()
        .then( response => {

            if (response.data.resultCode === 0) {

                dispatch( setAuthUserData( null, null, null, false ) );

            }
        } );

}


export default auth_reducer;







