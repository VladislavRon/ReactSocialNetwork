import preloader from "../../../loader.svg";
import React from "react";

function Preloader(){
    return <img src={preloader} style={{display:'block', margin: '30% auto' }}  alt={preloader}/>
}
export default Preloader;