import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/MainContent/Dialogs/Dialogs";
import Music from "./components/MainContent/Music/Music";
import News from "./components/MainContent/News/News";
import Settings from "./components/MainContent/Settings/Settings";
import FriendsContainer from "./components/MainContent/Friends/FriendsContainer";
import ProfileContainer from "./components/MainContent/MyPosts/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



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
                        element={<ProfileContainer  store={store} />}
                    />


                    <Route
                        path="/dialogs/*"
                        element={<Dialogs  store={store}  />}
                    />

                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route
                        path="/friends"
                        element={<FriendsContainer  store={store}  />}
                    />
                </Routes>
            </div>
        </div>
    );
}



export default App;


