import React, { Component } from 'react';
import { Zoom } from 'react-reveal';
import Send from '@material-ui/icons/Send'

class Core extends Component {
    render() {
        return (
            <div
                className="core_container"
            >
                <Zoom
                    delay={500}
                    duration={500}
                >
                    <div
                        className="core_box"
                    >
                        <div className="core_title_wrapper">
                            <h5 className="core_title">services</h5>
                        </div>
                        <div
                            className="core_text"
                        >
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Consulting Services</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Telecom value added services</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Training services</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Call center solution</p>
                            </div>
                        </div>
                        <div
                            className="core_button_wrapper"
                        >
                            <div
                                className="core_button"
                            >
                                Read more
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom
                    
                    duration={500}
                >
                    <div
                        className="core_box"
                    >
                        <div className="core_title_wrapper">
                            <h5 className="core_title">products</h5>
                        </div>
                        <div
                            className="core_text"
                        >
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Soft Switch design/deployment</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Application Development</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Wi-Fi / Wi-MAX deployment</p>
                            </div>
                            <div className="service_container_icon">
                                <span className="service_icon"><Send /></span><p className="service_text">Hardware Sales</p>
                            </div>
                        </div>
                        <div
                            className="core_button_wrapper"
                        >
                            <div
                                className="core_button"
                            >
                                Read more
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom
                    delay={500}
                    duration={500}
                >
                    <div
                        className="core_box"
                    >
                        <div className="core_title_wrapper">
                            <h5 className="core_title">clients</h5>
                        </div>
                        <div
                            className="core_text"
                        >
                            <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </span>
                        </div>
                        <div
                            className="core_button_wrapper"
                        >
                            <div
                                className="core_button"
                            >
                                Read more
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        );
    }
}

export default Core;