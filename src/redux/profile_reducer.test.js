import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

//SyntaxError: Cannot use import statement outside a module
//
//     > 1 | import axios from "axios";
//Что ни делал в package.json ничего не помогает убрать ошибку, тесты валятся
let state = {
    postData: [
        {id: 1, message: 'Post: 101', likesCount: 5},
        {id: 2, message: 'Post: 102', likesCount: 10},
        {id: 3, message: 'Post: 103', likesCount: 15},
    ],
}

let action = addPostActionCreator( 'aaa' );


test( 'length of postData should be incremented', () => {
    let newState = profileReducer( state, action )
    expect( newState.postData.length ).toBe( 4 );

} );


test( 'message of postData should be correct', () => {
    let newState = profileReducer( state, action )
    expect( newState.postData[3].message ).toBe( 'aaa' );

} );


test( 'after deleting length of message should be decrement', () => {
    let action = deletePost( 1 )
    let newState = profileReducer( state, action )
    expect( newState.postData.length ).toBe( 2 );
} );

test( `after deleting length shouldn't be decrement if id incorrect`,
    () => {
        let action = deletePost( 555 )
        let newState = profileReducer( state, action )
        expect( newState.postData.length ).toBe( 3 );
    } );