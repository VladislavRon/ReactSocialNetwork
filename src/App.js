import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Profile from "./components/MainContent/MyPosts/Profile";
import Dialogs from "./components/MainContent/Dialogs/Dialogs";
import Music from "./components/MainContent/Music/Music";
import News from "./components/MainContent/News/News";
import Settings from "./components/MainContent/Settings/Settings";
import {Route, Routes} from "react-router-dom";




// ПИСАТЬ КЛАССЫ КАК ВЫРАЖЕНИЯ
// <div className={`${classes.item} ${classes.active}`}>


function App({state, addMyMessage }) {

    return (
        <div className='appWrapper'>
            <Header />
            <Nav friends = {state.sidebar.friends} />
            <div className="MainContent">
                <Routes>
                    <Route path="/profile" element={<Profile postData={state.profilePage.postData} />}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsData={state.dialogsPage.dialogsData} myMessagesData={state.dialogsPage.myMessagesData}  addMyMessage = {addMyMessage} />} />
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}



export default App;


