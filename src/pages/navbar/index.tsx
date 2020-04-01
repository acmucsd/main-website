import React from 'react';

import ACMLogo from '../../assets/acm.svg';
import MenuButtonIcon from '../../assets/menubutton.svg'
import CloseMenuButton from '../../assets/closemenubutton.svg';
import { Link } from 'react-router-dom';
import './style.less';

const NavBar: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const toggleMenu = () => {
    const menuIcon = document.getElementsByClassName('menuicon')[0] as HTMLImageElement;
    const mobileLinks = document.getElementsByClassName('mobile-links')[0] as HTMLImageElement;
    if (menuState) {
      menuIcon.src = MenuButtonIcon;
      mobileLinks.style.display = 'none';
      setMenuState(false);
    } else {
      menuIcon.src = CloseMenuButton;
      mobileLinks.style.display = 'block';
      setMenuState(true);
    }
  }
  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li><Link to="/"><img src={ACMLogo} alt="ACM Logo" /></Link></li>
          <li><Link to="/" className="login-button">Login</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Events</Link></li>
          <li><Link to="/sponsor">Sponsorship</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <Link to="/"><img src={ACMLogo} alt="ACM Logo" /></Link>
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu} >
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </a>
        </div>
      </div>
      <div className="wainbow">
        <span className="pinkFill" />
        <span className="greenFill" />
        <span className="cyanFill" />
        <span className="purpleFill" />
        <span className="orangeFill" />
      </div>
      <div className="mobile-links">
        <Link to="/">Login</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Events</Link>
        <Link to="/sponsorship">Sponsorship</Link>
        <Link to="/">About Us</Link>
      </div>
    </div>
  );
}

export default NavBar;