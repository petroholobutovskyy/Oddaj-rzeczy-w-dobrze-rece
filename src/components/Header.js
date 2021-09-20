import React from 'react';
import { Link } from 'react-router-dom';
import herolImage from '../assets/HeroImage.png'

export default function Header() {
    return (
        <div className="container">
            <header className="header-container">
                <div className="logo">
                    <img src={herolImage}/>
                </div>
                <div className="header-right-bar">
                    <nav className="nav-container">
                        <div className="header-login">
                            <Link to="/login" className="header-login-button">Zaloguj</Link>
                            <Link to="/signup" className="header-login-button">Zaloz konto</Link>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-list-item"><a href="/">Start</a></li>
                            <li className="nav-list-item"><a href="#single-steps-section">O co chodzi</a></li>
                            <li className="nav-list-item"><a href="#about-us">O nas</a></li>
                            <li className="nav-list-item"><a href="#">Fundacja i organizacje</a></li>
                            <li className="nav-list-item"><a href="#contact-form">Kontakt</a></li>
                        </ul>
                    </nav>
                    <div className="header-main-info">
                        <h1 className="header-main-header">Zacznij pomagać!
                            <br/> Oddaj niechciane rzeczy w zaufane ręce
                        </h1>
                        <div className="header-image"></div>
                        <div className="header-main-info-buttons">
                            <Link to="/login" className="header-buttons">Oddaj <br/>rzeczy</Link>
                            <Link to="/login" className="header-buttons">Zorganizuj <br/>zbiorke</Link>
                                </div>

                    </div>
                    </div>    
            </header>
        </div>
    )
}
