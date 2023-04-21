import preloader from "../../../loader.svg";
import React from "react";
import {NavLink} from "react-router-dom";

function Preloader(){
    return <img src={preloader} style={{display:'block', margin: '30% auto' }}  alt={preloader}/>
}
export default Preloader;