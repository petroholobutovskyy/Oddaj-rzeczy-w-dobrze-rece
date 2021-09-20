import React from 'react';
import People from "../assets/People.png" ;
import Signature from '../assets/Signature.svg'

export default function AboutUs() {
    return (
        <div className="container" id="about-us">
            <div className="about-us-container">
             <div className="about-us-leftbar">
                <h1 className="about-us-header">O nas</h1>
                <div className="header-image"></div>
                <p className="about-us-text">Nori grape silver beet broccoli kombu beet greens
                 fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek 
                 lentil turnip greens parsnip.</p>
                 
                 <img src={Signature}/>
            </div>
            <div className="about-us-rightbar">
            <div className="about-us-image"></div>
                {/* <img src={People}/> */}
            </div>
            </div>
        </div>
    )
}
