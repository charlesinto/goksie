import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Resources/loo.png";

class Header extends Component {
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        //this.state.header ? '' : '#f77b6f'
    }
    state = {
        drawerOpen: false,
        header: false,
    }
    componentDidMount(){
        window.addEventListener('scroll',
            this.handleScroll
        )
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        if(window.scrollY > 0){
            this.setState({
                header:true
            })
        }else {
            this.setState({
                header:false
            })
        }
    }
    render(){
        return (
            <div
                className="header_wrapper"
                style={{zIndex:1000,
                    background:this.state.header ? 'rgb(247, 123, 111)' :'' 
                }}
            >
                <div
                    className="company-name"
                >   <div
                        className="logo"
                        style={{
                            background: `url(${logo})`,
                            backgroundSize:'cover'
                        }}

                    >
                    </div>
                   <a href="/"> <span> Goksie </span></a>
                </div>
                <nav
                    className="nav-bar-header"
                >
                    
                    <ul>
                        <li>
                            <Link to={'#'}>About</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Services</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Projects</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Clients</Link>
                        </li>
                        <li>
                            <Link to={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
//1193d4
export default Header;