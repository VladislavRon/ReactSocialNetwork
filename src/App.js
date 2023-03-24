import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/MainContent/MyPosts/Profile";
import Dialogs from "./components/MainContent/Dialogs/Dialogs";
import Music from "./components/MainContent/Music/Music";
import News from "./components/MainContent/News/News";
import Settings from "./components/MainContent/Settings/Settings";
import {Route, Routes} from "react-router-dom";






// ПИСАТЬ КЛАССЫ КАК ВЫРАЖЕНИЯ
// <div className={`${classes.item} ${classes.active}`}>


const App = ({store}) => {

    return (
        <div className='appWrapper'>
            <Header />
            <Nav store={store} />

            <div className="MainContent">
                <Routes>
                    <Route
                        path="/profile"
                        element={<Profile  store={store} />}
                    />


                    <Route
                        path="/dialogs/*"
                        element={<Dialogs  store={store}  />}
                    />


                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}



export default App;


