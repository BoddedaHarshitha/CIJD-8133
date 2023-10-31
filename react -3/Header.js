import { App_logo,App_Icon } from "./Constants"
import React from "react";
import ReactDOM from "react-dom";
const Header=()=>{
    return(
        <>
        <header className="header">
            <div className="left">
                <img className="logo_img" src={App_logo}/>
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search"/>
                <button type="submit"></button>
            </div>
            <div className="right">
               <img className="App_Icon" src={App_Icon}/>
            </div>
        </header>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>)
export default Header
