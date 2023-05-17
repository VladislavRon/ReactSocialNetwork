import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));



// let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <HashRouter>
            {/*<BrowserRouter basename ="/">*/}
                    <Provider store={store}>
                        <App store={store}/>
                    </Provider>
            {/*</BrowserRouter>*/}
            </HashRouter>
        </React.StrictMode>
    );

// }

// rerenderEntireTree(store.getState());
//
// store.subscribe(() =>{
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

