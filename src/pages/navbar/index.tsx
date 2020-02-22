import React from 'react';

import ACMLogo from '../../assets/acm.svg';
import Wainbow from '../../assets/wainbow.svg';
import MenuButtonIcon from '../../assets/menubutton.svg'
import CloseMenuButton from '../../assets/closemenubutton.svg';

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
          <li><a href="/"><img src={ACMLogo} alt="ACM Logo" /></a></li>
          <li><a href="" className="login-button">Login</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Sponsorship</a></li>
          <li><a href="">About Us</a></li>
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <a href="/"><img src={ACMLogo} alt="ACM Logo" /></a>
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu} >
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </a>
        </div>
      </div>
      <img draggable="false" src={Wainbow} className="wainbow" alt="wainbow" />
        <div className="mobile-links">
          <a href="">Login</a>
          <a href="">Contact</a>
          <a href="">Events</a>
          <a href="">Sponsorship</a>
          <a href="">About Us</a>
        </div>
    </div>
  );
}

export default NavBar;