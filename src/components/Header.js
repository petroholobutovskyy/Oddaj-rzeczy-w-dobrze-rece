import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import herolImage from '../assets/HeroImage.png'

export default function Header() {
    return (
        <div className="container">
            <header className="header-container">
                <div className="logo">
                    <img src={herolImage}/>
                </div>
                <div className="header-right-bar">
                    <Navigation/>
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
