import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

class Layout extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;