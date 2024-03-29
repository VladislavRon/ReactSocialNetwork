import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";




class HeaderContainer extends React.Component {



    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

//чтобы функция вернула объект без return фигурные скобки оборачиваются обычными ???
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout}) (HeaderContainer);

// import React from 'react';
// import Header from "./Header";
// import axios from "axios";
// import {connect} from "react-redux";
// import {setAuthUserData} from "../../redux/auth_reducer";
//
//
//
// class HeaderContainer extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
//             {withCredentials: true} )
//             .then(response => {
//                 if(response.data.resultCode === 0){
//                     let {id, email, login} = response.data.data;
//                     this.props.setAuthUserData(id, email, login);
//                 }
//                 //console.log(response.data)
//             });
//     }
//
//     render(){
//         return(
//             <Header {...this.props}/>
//         )
//     }
// }
//
// //чтобы функция вернула объект без return фигурные скобки оборачиваются обычными ???
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth,
//     login: state.auth.login
// })
//
// export default connect(mapStateToProps, {
//     setAuthUserData
// }) (HeaderContainer);