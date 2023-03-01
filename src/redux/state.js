
const state = {

    profilePage: {
        postData : [
            {id:0, text: 'Hey, why nobody loves me?', likesCount: '5'},
            {id:1 ,text: 'Hey, why fu loves you?', likesCount: '15'},
            {id:2 ,text: 'Hey, why fu loves you?', likesCount: '1'},
        ]
    },
    dialogsPage: {
        dialogsData : [
            {id: 1, name: 'Papa rimskii', url: 'https://gambolthemes.net/workwise-new/images/resources/s1.png' },
            {id: 2, name: 'iiiiiiGARb', url: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
            {id: 3, name: 'Berlusconi', url: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
            {id: 4, name: 'Tramp', url: 'https://gambolthemes.net/workwise-new/images/resources/s4.png'},
            {id: 5, name: 'Zelensky', url: 'https://gambolthemes.net/workwise-new/images/resources/s5.png'},
            {id: 6, name: 'Baiden', url: 'https://gambolthemes.net/workwise-new/images/resources/s6.png'}
        ],

        myMessagesData : [
            {
                id: 1,
                myMessages : [
                    {id: 1, message: 'Hi, quisquam.',  likesCount: 1},
                    {id: 11, message: 'Hi, quisquam11.',  likesCount: 11},

                ],
                answers : [
                    {id: 1, message: 'Hi, quisquam2.',  likesCount: 1},
                    {id: 222, message: 'Hi, quisquam222.',  likesCount: 222},
                ]
            },

            {id: 2, myMessages : [{id: 1, message: 'Hi, quisquam3.',  likesCount: 1}],  answers : [{id: 1, message: 'Hi, quisquam4.',  likesCount: 1}]},
            {id: 3, myMessages : [{id: 1, message: 'Hi, quisquam5.',  likesCount: 1}],  answers : [{id: 1, message: 'Hi, quisquam6.',  likesCount: 1}]},
            {id: 4, myMessages : [{id: 1, message: 'Hi, quisquam7.',  likesCount: 1}],  answers : [{id: 1, message: 'Hi, quisquam8.',  likesCount: 1}]},
            {id: 5, myMessages : [{id: 1, message: 'Hi, quisquam9.',  likesCount: 1}],  answers : [{id: 1, message: 'Hi, quisquam10.',  likesCount: 1}]},
            {id: 6, myMessages : [{id: 1, message: 'Hi, quisquam11.',  likesCount: 1}],  answers : [{id: 1, message: 'Hi, quisquam12.',  likesCount: 1}]}
        ],


    },

    sidebar: {
        friends: [
            {id: 1, name: 'John', url: 'https://gambolthemes.net/workwise-new/images/resources/s2.png'},
            {id: 2, name: 'Jessica', url: 'https://gambolthemes.net/workwise-new/images/resources/s1.png'},
            {id: 3, name: 'Arnold', url: 'https://gambolthemes.net/workwise-new/images/resources/s3.png'},
        ]

    }


}

export default state;




