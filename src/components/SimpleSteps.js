import React from 'react';
import { Link } from 'react-router-dom';
import Tshirt from '../assets/Icon.png';
import Bag from '../assets/Icon2.png';
import Loupe from '../assets/Icon3.png'; 
import Loading from '../assets/Icon4.png'

export default function SimpleSteps() {
    return (
        <div className="container single-steps-main-container" id="single-steps-section">
            <h1 className="simple-steps-header">Wystarcza 4 proste kroki</h1>
            <div className="header-image"></div>
            <div className="simple-steps-container">
                <div className="single-steps-column">
                    <img src={Tshirt}/> 
                    <div className="single-steps-column-image"></div>
                    <p className="single-steps-column-title">Wybierz rzeczy</p>
                    <p className="single-steps-column-text">ubrania, zabawki, <br/>sprzęt i inne</p>

                </div>
                <div className="single-steps-column">
                    <img src={Bag}/> 
                    <div className="single-steps-column-image"></div>
                    <p className="single-steps-column-title">Spakuj je</p>
                    <p className="single-steps-column-text">skorzystaj z<br/> worków na śmieci</p>

                </div>
                <div className="single-steps-column">
                    <img src={Loupe}/> 
                    <div className="single-steps-column-image"></div>
                    <p className="single-steps-column-title">Zdecyduj komu <br/> chcesz pomóc</p>
                    <p className="single-steps-column-text">wybierz zaufane <br/> miejsce</p>

                </div>
                <div className="single-steps-column">
                    <img src={Loading}/> 
                    <div className="single-steps-column-image"></div>
                    <p className="single-steps-column-title">Zamów kuriera</p>
                    <p className="single-steps-column-text">kurier przyjedzie <br/> w dogodnym terminie</p>

                </div>
            </div>
            <Link to="/login" className="header-buttons">Oddaj <br/>rzeczy</Link>

            
        </div>
    )
}
