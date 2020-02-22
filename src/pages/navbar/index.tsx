import React from 'react';

import ACMLogo from '../../assets/acm.svg';
import Wainbow from '../../assets/wainbow.svg';

import './style.less';

const NavBar: React.FC = () => {
    return (
        <>
        <div className="navbar-div">
            <ul className="navbar">
                <li><a href="/"><img src={ACMLogo} alt="ACM Logo" /></a></li>
                <li><a href="" className="login-button">Login</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Sponsorship</a></li>
                <li><a href="">About Us</a></li>
            </ul>
        </div>
        <img src={Wainbow} className="wainbow" />
        </>
    );
}

export default NavBar;