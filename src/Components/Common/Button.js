import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
    
    render() {
        const { text, href, style, onClick} = this.props;
        console.log('style', style)
        return href ? <Link to={href}><div className="core_button_wrapper"
        > <div
        className="core_button abt_us_button" style={{...style}}
        onClick={onClick}>
                {text}
        </div></div></Link> : <div className="core_button_wrapper"> <div
                            className="core_button abt_us_button" style={{background:'#2f69d8', ...style}}
                            onClick={onClick}>
                                    {text}
                            </div>
                        </div>
    }
}

export {Button};