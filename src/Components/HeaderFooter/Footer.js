import React from 'react';
import Directions from '@material-ui/icons/Directions';
import Phone from '@material-ui/icons/Phone';

const Footer = () => {
    return (
        <div className="footer">
            <div className="left" style={{ marginLeft: '20px'}}>
                <h3>Address</h3>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    <div style={{display:'flex', flex:'1 1 300px'}}>
                        <div style={{display:'flex',padding:'10px',flexDirection:'column', justifyContent:'center'}} >
                            <Directions style={{color: '#fff',fontSize: '48px'}} />
                        </div>
                        <address style={{color:'#fff', fontFamily:'open sans, sans-seriff'}}>
                            <p>Hillside Plaza Plot 1901 Yakubu Gowon Crescent</p>
                            <p>Asokoro, Abuja </p>
                            <p>Nigeria </p>
                        </address>
                    </div>
                    <div style={{display:'flex', flex:'1 1 300px'}}>
                        <div style={{display:'flex',padding:'10px', flexDirection:'column', justifyContent:'center'}} >
                            <Directions style={{color: '#fff',fontSize: '48px'}} />
                        </div>
                        <address style={{color:'#fff', fontFamily:'open sans, sans-seriff'}}>
                            <p>3 Adeola Adeoye Street, Off Toyin Street</p>
                            <p>Ikeja, Lagos State</p>
                            <p>Nigeria </p>
                        </address>
                    </div>
                </div>
            </div>
            <div className="right" style={{ marginLeft: '20px'}}>
                <h3 style={{paddingBottom:'20px'}}>Quick Contact</h3>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    <div style={{display:'flex', flex:'1 1 300px'}}>
                        <div style={{display:'flex',padding:'10px',flexDirection:'column', justifyContent:'center'}} >
                            <Phone style={{color: '#fff',fontSize: '32px'}} />
                        </div>
                        <h5 style={{color:'#fff', fontFamily:'open sans, sans-seriff'}}>
                            +2348099444264
                        </h5>
                    </div>
                    <div style={{display:'flex', flex:'1 1 300px'}}>
                        <div style={{display:'flex',padding:'10px',flexDirection:'column', justifyContent:'center'}} >
                            <Phone style={{color: '#fff',fontSize: '32px'}} />
                        </div>
                        <h5 style={{color:'#fff', fontFamily:'open sans, sans-seriff'}}>
                            +2348099444023
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;