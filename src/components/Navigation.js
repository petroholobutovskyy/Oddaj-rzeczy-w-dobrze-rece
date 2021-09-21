import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
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
            
        </div>
    )
}
