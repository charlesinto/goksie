import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Core from './Core';
import AboutUs from './AboutUs';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div
            >
                <LandingPage />
                <Core />
                <AboutUs />
                <Contact />
            </div>
        );
    }
}

export default Home;