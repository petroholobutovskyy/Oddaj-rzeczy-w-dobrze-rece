import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";


export default function Logout() {
    return (
        <div className="container">
            <Navigation/>
            <div className="login-container">
                <h1 className="header-logout">Wylogowanie nastapiło <br/> pomyślnie!</h1>
                <div className="header-image"></div>
                <Link to="/" className="logout-btn">Strona główna</Link>
            </div>
            
        </div>
    )
}
