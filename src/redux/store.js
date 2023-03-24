// import profile_reducer from "./profile_reducer";
// import dialogs_reducer from "./dialogs_reducer";
// import sidebar_reducer from "./sidebar_reducer";
//
//
//
// let store = {
//     _state: {
//
//         profilePage: {
//             postData : [
//                 {id:0, message: 'Hey, why nobody loves me?', likesCount: '5'},
//                 {id:1 ,message: 'Hey, why fu loves you?', likesCount: '15'},
//                 {id:2 ,message: 'Hey, why fu loves you?', likesCount: '1'},
//             ],
//             newPostText: 'asdfdsaf'
//         },
//         dialogsPage: {
//             dialogsData : [
//                 {id: 1, name: 'Papa rimskii', url: 'https://gambolthemes.net/workwise-new/images/resources/s1.png' },
//                 {id: 2, name: 'iiiiiiGARb', url: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
//                 {id: 3, name: 'Berlusconi', url: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
//                 {id: 4, name: 'Tramp', url: 'https://gambolthemes.net/workwise-new/images/resources/s4.png'},
//                 {id: 5, name: 'Zelensky', url: 'https://gambolthemes.net/workwise-new/images/resources/s5.png'},
//                 {id: 6, name: 'Baiden', url: 'https://gambolthemes.net/workwise-new/images/resources/s6.png'}
//             ],
//
//             myMessagesData : [
//                 {id: 1,myMessages : [{id: 11, message: 'Hi, Papa rimskii.',  likesCount: 1}, {id: 12, message: 'How are U',  likesCount: 11},], answers : [ {id: 11, message: 'Hi, Vl.',  likesCount: 1},{id: 12, message: 'Norm.',  likesCount: 222},]},
//                 {id: 2, myMessages : [{id: 2, message: 'Hi, iiiiiiGARb.',  likesCount: 1}],  answers : [{id: 2, message: 'Hi, Vl.2',  likesCount: 1}]},
//                 {id: 3, myMessages : [{id: 3, message: 'Hi, Berlusconi.',  likesCount: 1}],  answers : [{id: 3, message: 'Hi, Vl.3',  likesCount: 1}]},
//                 {id: 4, myMessages : [{id: 4, message: 'Hi, Tramp.',  likesCount: 1}],  answers : [{id: 4, message: 'Hi, Vl.4',  likesCount: 1}]},
//                 {id: 5, myMessages : [{id: 5, message: 'Hi, Zelensky.',  likesCount: 1}],  answers : [{id: 5, message: 'Hi, Vl.5',  likesCount: 1}]},
//                 {id: 6, myMessages : [{id: 6, message: 'Hi, Baiden.',  likesCount: 1}],  answers : [{id: 6, message: 'Hi, Vl.6' ,  likesCount: 1}]}
//             ],
//             newMessageBody: ''
//
//
//         },
//
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'John', url: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
//                 {id: 2, name: 'Jessica', url: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
//                 {id: 3, name: 'Arnold', url: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
//             ]
//
//         },
//
//     },
//     _callSubscriber(){
//         console.log('State changed');
//     },
//
//
//     getState(){
//         return this._state;
//     },
//
//     subscribe(observer){
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profile_reducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebar_reducer(this._state.sidebar, action);
//         this._callSubscriber(this._state);
//
//
//         // if (action.type === ADD_POST) {
//         //     let newPost = {
//         //         id: 5,
//         //         message: this._state.profilePage.newPostText,
//         //         likesCount: 0
//         //     };
//         //     this._state.profilePage.postData.push(newPost);
//         //     this._state.profilePage.newPostText = '';
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_POST_TEXT){
//         //     this._state.profilePage.newPostText = action.newText;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
//         //     this._state.dialogsPage.newMessageBody = action.body;
//         //     this._callSubscriber(this._state);
//         // } else if (action.type === SEND_MESSAGE){
//         //     let body = this._state.dialogsPage.newMessageBody;
//         //     this._state.dialogsPage.newMessageBody = '';
//         //     this._state.dialogsPage.myMessagesData[0].myMessages.push({id: 26, message: body,  likesCount: 0})
//         //     this._callSubscriber(this._state);
//         // }
//     }
//
// }
//
//
//
//
//
//
//
// export default store;
// window.store = store;
//
//


