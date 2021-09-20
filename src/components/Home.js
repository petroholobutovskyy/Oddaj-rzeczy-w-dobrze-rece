import React from 'react';
import Header from './Header';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import Clients from './Clients';
import ContactForm from './ContactForm';

export default function Home() {
    return (
        <div>
            <Header/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <Clients/>
            <ContactForm/>
        </div>
    )
}

// export default LandingPage;
