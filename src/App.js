import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Music from "./components/MainContent/Music/Music";
import News from "./components/MainContent/News/News";
import Settings from "./components/MainContent/Settings/Settings";
import FriendsContainer from "./components/MainContent/Friends/FriendsContainer";
import ProfileContainer from "./components/MainContent/MyPosts/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/MainContent/Dialogs/DialogsContainer";




// ПИСАТЬ КЛАССЫ КАК ВЫРАЖЕНИЯ
// <div className={`${classes.item} ${classes.active}`}>


const App = ({store}) => {

    return (
        <div className='appWrapper'>
            <HeaderContainer />
            <Nav store={store} />
            <div className="MainContent">
                <Routes>
                    <Route
                        path="/profile/*"
                        element={<ProfileContainer />}
                    />
                    <Route
                        path="/dialogs/*"
                        //store={store} попадает в компоненту как стейты
                        element={<DialogsContainer store={store} />}
                    />
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route
                        path="/friends"
                        element={<FriendsContainer  />}
                    />
                    <Route
                        path="/login"
                        element={ <Login />}
                    />
                </Routes>
            </div>
        </div>
    );
}



export default App;


