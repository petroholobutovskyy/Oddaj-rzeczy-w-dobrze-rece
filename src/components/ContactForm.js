import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactForm() {
    return (
        <div className="container">
          <div className="contact-form-container" id="contact-form">
            
            <form className="contact-form"> 
            <h1 className="contact-form-header">Skontaktuj się z nami</h1>
            <div className="header-image"></div>
                <div className="input-data">
                    <div className="contact-label"><label for="name">Wpisz swoje imię</label>
                    <input type="text" id="name" placeholder="Petro"/></div>
                    <div className="contact-label"><label for="email">Wpisz swój email</label>
                    <input type="email" id="email" placeholder="mail@gmail.com"/></div>
                </div>
                <div className="contact-label">
                    <label for="message">Wpisz swoj wiadomość</label>
                    <textarea rows="7" cols="10" id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </div>
                <div className="contact-form-btn"><button>Wyślij</button></div>
            </form>
            <footer className="footer">
                <h6>Copyright by Coders Lab</h6>
                <div className="social-media">
                <FontAwesomeIcon icon={faFacebookSquare} className="icon-user facebook" />
                <FontAwesomeIcon icon={faInstagram} className="icon-user instagram" />
                    </div>
            </footer>
         </div>  
        </div>
    )
}
