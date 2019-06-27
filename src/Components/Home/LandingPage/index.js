import React, { Component } from 'react';
import Carousel from './Carousel';
import Slogan from './Slogan';

class LandingPage extends Component {
    render() {
        return (
            <div
                style={{position:'relative'}}
            >
                <Carousel />
                <Slogan />
            </div>
        );
    }
}

export default LandingPage;