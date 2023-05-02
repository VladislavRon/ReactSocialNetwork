import {instance} from "./api";

export const authAPI = {
    logIn(email, password, rememberMe = false) {
        return instance.post(
            `auth/login`,
            {email, password, rememberMe} );
    },

    logOut() {
        return instance.delete( `auth/login` );
    },
    me() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    }


}