import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import sidebar_reducer from "./sidebar_reducer";
import friends_reducer from "./friends_reducer";
import auth_reducer from "./auth_reducer";
import  thunkMiddleware from "redux-thunk";


// тут ключи типо profilePage - это как бы обьекты
// в которых лежат значения - тоест наши стейты - что тоже объекты

let reducers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebar_reducer,
    friendsPage: friends_reducer,
    auth: auth_reducer
});

//let store = createStore(reducers);


//добавляем мидлваре(специализированый промежуточный уровень) для обработки санок, ее надо инстал npm i redux-thunk
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//добавляем стор в обьект window, что бы из консоли можно было легко его просмотреть с пом запроса в консоли store.getState()
window.store = store;


export default store;