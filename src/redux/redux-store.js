import {combineReducers, legacy_createStore as createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";
import friends_reducer from "./friends_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebar_reducer,
    friendsPage: friends_reducer
});

let store = createStore(reducers);


export default store;