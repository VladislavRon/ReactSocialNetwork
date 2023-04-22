import axios from "axios";

//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    //если ввести его так, он автоматически приклеивается в начало запроса
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "dd035e6e-67f0-46b2-b05f-b78cb95df01f"
    }
})

//запихнули в класс и сделали методом
export const usersAPI = {
    getUsers(currentPage=1, pageSize=5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            //для удобства получаем не весь респонс а сразу дату
            .then(response => response.data);
    }
}



// export const getUsers2 = (currentPage=1, pageSize=5) => {
//     return instance
//         .get(`follow?page=${currentPage}&count=${pageSize}`, {
//             withCredentials: true })
//         //для удобства получаем не весь респонс а сразу дату
//         .then(response => response.data);
// }