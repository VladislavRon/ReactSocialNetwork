import axios from "axios";

//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

export const instance = axios.create({
    withCredentials: true,
    //если ввести его так, он автоматически приклеивается в начало запроса
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "dd035e6e-67f0-46b2-b05f-b78cb95df01f"
    }
})

