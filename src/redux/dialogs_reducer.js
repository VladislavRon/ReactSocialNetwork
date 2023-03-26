const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogsData : [
        {id: 1, name: 'Papa rimskii', url: 'https://gambolthemes.net/workwise-new/images/resources/s1.png' },
        {id: 2, name: 'iiiiiiGARb', url: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
        {id: 3, name: 'Berlusconi', url: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
        {id: 4, name: 'Tramp', url: 'https://gambolthemes.net/workwise-new/images/resources/s4.png'},
        {id: 5, name: 'Zelensky', url: 'https://gambolthemes.net/workwise-new/images/resources/s5.png'},
        {id: 6, name: 'Baiden', url: 'https://gambolthemes.net/workwise-new/images/resources/s6.png'}
    ],

    myMessagesData : [
        {id: 1,myMessages : [{id: 11, message: 'Hi, Papa rimskii.',  likesCount: 1}, {id: 12, message: 'How are U',  likesCount: 11},], answers : [ {id: 11, message: 'Hi, Vl.',  likesCount: 1},{id: 12, message: 'Norm.',  likesCount: 222},]},
        {id: 2, myMessages : [{id: 2, message: 'Hi, iiiiiiGARb.',  likesCount: 1}],  answers : [{id: 2, message: 'Hi, Vl.2',  likesCount: 1}]},
        {id: 3, myMessages : [{id: 3, message: 'Hi, Berlusconi.',  likesCount: 1}],  answers : [{id: 3, message: 'Hi, Vl.3',  likesCount: 1}]},
        {id: 4, myMessages : [{id: 4, message: 'Hi, Tramp.',  likesCount: 1}],  answers : [{id: 4, message: 'Hi, Vl.4',  likesCount: 1}]},
        {id: 5, myMessages : [{id: 5, message: 'Hi, Zelensky.',  likesCount: 1}],  answers : [{id: 5, message: 'Hi, Vl.5',  likesCount: 1}]},
        {id: 6, myMessages : [{id: 6, message: 'Hi, Baiden.',  likesCount: 1}],  answers : [{id: 6, message: 'Hi, Vl.6' ,  likesCount: 1}]}
    ],
    newMessageBody: ''
}

const dialogs_reducer = (state = initialState, action) => {




    switch (action.type) {
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            let stateCopy = {
                ...state,
                newMessageBody: '',

            };
            let ID = action.id -1;
            // stateCopy.myMessagesData= [...state.myMessagesData];
            // stateCopy.myMessagesData[0] = {...state.myMessagesData[0]};
            stateCopy.myMessagesData[ID].myMessages.push({id: 26, message: body,  likesCount: 0})
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY:{
             return{
                ...state,
                newMessageBody: action.body
            };

        }
        default: return state;
    }


}
export const sendMessageCreator = (id) =>  ({type: SEND_MESSAGE, id:id})
export const updateNewMessageBodyCreator = (body) =>  ({  type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogs_reducer;

//  if (action.type === UPDATE_NEW_MESSAGE_BODY){
//     state.newMessageBody = action.body;
//
// } else if (action.type === SEND_MESSAGE){
//     let body = state.newMessageBody;
//     let ID = action.id -1;
//     state.newMessageBody = '';
//     state.myMessagesData[ID].myMessages.push({id: 26, message: body,  likesCount: 0})
//
// }
//
// return state;



//let newSms = {
//                 id: 26,
//                 message: state.newMessageBody,
//                 likesCount: 0
//             };
//             let stateCopy = {...state};
//             stateCopy.myMessagesData = [...state.myMessagesData];
//             stateCopy.myMessagesData[0] = {...state.myMessagesData[0]};
//             stateCopy.myMessagesData[0].myMessages = [...state.myMessagesData[0].myMessages];
//             let body = state.newMessageBody;
//             let ID = action.id -1;
//             stateCopy.newMessageBody = '';
//             stateCopy.myMessagesData[0].myMessages.push(newSms)
//             return stateCopy;