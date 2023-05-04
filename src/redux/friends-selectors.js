import {createSelector} from "reselect";


export const getFriends = (state) => {
    return state.friendsPage.friends;
}

export const getFriendsSelector = createSelector(
    getFriends,
    (friends) => {
        return friends.filter( unit => unit );
    }
)




export const getPageSize = (state) => {
    return state.friendsPage.pageSize;
}
export const getUsersCount = (state) => {
    return state.friendsPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.friendsPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.friendsPage.followingInProgress;
}