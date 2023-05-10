import {instance} from "./api";

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    //lesson73 запрос на сервер за статусом и запись на сервер нового
    // что сначала лучше делать БЛЛ ДАЛ или ЮАЙ решать мне
    // сначала делаем dal(апишку) потом bll(дергаем ДАЛ редюсерами и в профайлКонтейнере)
    // потом будем дергать из UI БЛЛ и ДАЛ
    // 1.Сделали методы -> 2.ProfileContainer
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status //(если названия совпадают то можно писать просто status)
        })
    }


}