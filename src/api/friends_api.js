
//запихнули в класс и сделали методом
import {instance} from "./api";

export const usersAPI = {
    getUsers(currentPage=1, pageSize=5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            //для удобства получаем не весь респонс а сразу дату
            .then(response => response.data);
    },
    follow(userId){
        return instance
            .post(`follow/${userId}`, )
    },
    unfollow(userId){
        return instance
            .delete(`follow/${userId}`, )
        //axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        //             withCredentials: true,
        //             headers: {
        //                 "API-KEY": "dd035e6e-67f0-46b2-b05f-b78cb95df01f"
        //             }
        //         })

    }
}



// export const getUsers2 = (currentPage=1, pageSize=5) => {
//     return instance
//         .get(`follow?page=${currentPage}&count=${pageSize}`, {
//             withCredentials: true })
//         //для удобства получаем не весь респонс а сразу дату
//         .then(response => response.data);
// }



