import React, { Component } from 'react';

class Slogan extends Component {
    render() {
        return (
            <div
                style={{
                    bottom: '0px',
                    left:'0px',
                    width: '100%',
                    background: 'rgb(265, 244, 275,0.8)',
                    textAlign: 'center'
                }}
            >
                <h6
                    style={{
                        fontSize:'16px',
                        fontFamily: 'raleway, sans seriff',
                        color:'rgb(37, 31, 30)',
                        lineHeight: '1.3em',
                        letterSpacing: '0.09em',
                        padding: '15px 0px'
                    }}
                > 
                    WELCOME TO GOKSIE WORKS
                </h6>
                <h3
                    style={{
                        fontSize:'15px',
                        fontFamily: 'open sans, sans seriff',
                        color: '#000',
                        paddingBottom: '15px',
                        paddingLeft:'15px',
                        paddingRight:'15px'
                        
                    }}
                >
                    Goksie Works Limited is a new breed telecommunications / value added 
                    service company involved in direct communications with the consumers 
                    and also making it easy for the clients to access its services. 
                    We also participate in office automation, save customers calls on 
                    communications and bridging the reachability.
                </h3>

            </div>
        );
    }
}

export default Slogan;