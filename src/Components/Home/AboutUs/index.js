import React, { Component } from 'react';
import { Zoom } from 'react-reveal';

class AboutUs extends Component {
    render() {
        return (
            <div
                className="about_us_container"
            >
                <Zoom
                    duration={500}
                >
                    <div className="title-wrapper">
                        <h3 className="about_us_title">about us</h3>
                    </div>
                </Zoom>
                <Zoom
                    delay={500}
                    duration={500}
                >
                    <div
                        className="about_us_text_wrapper"
                    >
                        <div className="about_us_text">
                        Goksie Works Nigeria Limited was incorporated with registration no. RC 658879
                         under the Companies and Allied Matters Act 1990. Goksie Works Nigeria Limited
                         has conducted both primary and secondary research into the Telecommunications
                          market and has identified a significantly underserved segment within it. 
                          The company is uniquely positioned to serve this segment of the market because 
                          of its vast experience in software packaging tailored to suit the purpose of our clients, 
                          its experience in the designing and deployment of Telecoms products and its vast grasp of the developments 
                          in the field of IT kept us abreast of the fast pace of innovations in computer technology and through remarkable 
                          service delivery to our customers and clients. Ours is an emerging computer/IT company in Nigeria with an 
                          enviable professional edge in software development and computing. 
                        Goksie Works is currently in the growth stage and expects to move rapidly towards further growth and profitability
                        </div>

                    </div>
                </Zoom>
                <Zoom
                    delay={1000}
                    duration={500}
                >
                    <div
                        className="core_button_wrapper"
                    >
                        <div
                            className="core_button abt_us_button"
                        >
                            Read more
                            </div>
                    </div>
                </Zoom>
            </div>
        );
    }
}

export default AboutUs;