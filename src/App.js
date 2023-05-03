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
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";





// ПИСАТЬ КЛАССЫ КАК ВЫРАЖЕНИЯ
// <div className={`${classes.item} ${classes.active}`}>


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        let {store} = this.props;

        if(!this.props.initialized){
             return <Preloader />
        }
        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <Nav store={store}/>
                <div className="MainContent">
                    <Routes>
                        <Route
                            path="/profile/*"
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path="/dialogs/*"
                            //store={store} попадает в компоненту как стейты
                            element={<DialogsContainer store={store}/>}
                        />
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route
                            path="/login"
                            element={<Login/>}
                        />
                        <Route
                            path="/friends"
                            element={<FriendsContainer/>}
                        />
                    </Routes>
                </div>
            </div>
        );
    }
}
//когда мы конеектим компоненту - сбивается роутинг (лично у меня все ок, мож пофиксили)
// поэтому  компоус и визроутер не делал

let mapStateToProps = (state) => ({
    initialized: state.app.initialized

})

// export default connect(mapStateToProps, {getAuthUserData}) (App);
export default connect(mapStateToProps, {initializeApp}) (App);

// const App = ({store}) => {
//
//     return (
//         <div className='appWrapper'>
//             <HeaderContainer />
//             <Nav store={store} />
//             <div className="MainContent">
//                 <Routes>
//                     <Route
//                         path="/profile/*"
//                         element={<ProfileContainer />}
//                     />
//                     <Route
//                         path="/dialogs/*"
//                         //store={store} попадает в компоненту как стейты
//                         element={<DialogsContainer store={store} />}
//                     />
//                     <Route path="/news" element={<News />}/>
//                     <Route path="/music" element={<Music />}/>
//                     <Route path="/settings" element={<Settings />}/>
//                     <Route
//                         path="/login"
//                         element={ <Login />}
//                     />
//                     <Route
//                         path="/friends"
//                         element={<FriendsContainer  />}
//                     />
//                 </Routes>
//             </div>
//         </div>
//     );
// }



// export default App;


