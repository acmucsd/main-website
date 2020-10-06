import React from 'react';

import { Link } from 'react-router-dom';
import ACMLogo from '../../assets/acm.svg';
import MenuButtonIcon from '../../assets/menubutton.svg';
import CloseMenuButton from '../../assets/closemenubutton.svg';
import './style.less';

const NavBar: React.FC = () => {
  const [menuState, setMenuState] = React.useState(false);
  const toggleMenu = (): void => {
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
  };
  const scrollToContacts = (): void => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="fixed-nav">
      <div className="navbar-div">
        <ul className="navbar">
          <li>
            <Link to="/">
              <img src={ACMLogo} alt="ACM Logo" />
            </Link>
          </li>
          <li>
            <a href="https://members.acmucsd.com/login" className="login-button">
              Login
            </a>
          </li>
          <li>
            <Link to="#contact" onClick={scrollToContacts}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/sponsor">Sponsorship</Link>
          </li>
          {/* <li>
            <Link to="/aboutus">About Us</Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-mobile-div">
        <div className="navbar-mobile">
          <Link to="/">
            <img src={ACMLogo} alt="ACM Logo" />
          </Link>
          <button className="icon" onClick={toggleMenu} type="button">
            <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
          </button>
        </div>
      </div>
      <div className="wainbow" />
      <div className="mobile-links">
        {/* <Link to="/aboutus" onClick={toggleMenu}>
          About Us
        </Link> */}
        <Link to="/sponsor" onClick={toggleMenu}>
          Sponsorship
        </Link>
        <Link
          to="#contact"
          onClick={(): void => {
            toggleMenu();
            scrollToContacts();
          }}
        >
          Contact
        </Link>
        <a href="https://members.acmucsd.com/login" onClick={toggleMenu}>
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
