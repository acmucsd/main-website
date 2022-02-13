import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ACMLogo from "public/assets/ACMWhiteLogo.png";
import CloseMenuButton from "public/assets/closemenubutton.svg";
import MenuButtonIcon from "public/assets/menubutton.svg";

const navLinks = [
  { to: "/sponsor", text: "Sponsor" },
  { to: "/communities", text: "Communities" },
  { to: "/about", text: "About Us" },
];

const NavigationBar: React.FC = () => {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => setMenuState(!menuState);

  return (
    <div className="fixed-nav">
      <div className="navigation-bar">
        <ul>
          <li className="navigation-bar__logo">
            <Link href="/">
              <a>
                {/* image breaking the website right now */}
                <img src={ACMLogo.src} alt="ACM Logo" />
                <p>at UCSD</p>
              </a>
            </Link>
          </li>
          <li className="navigation-bar__login">
            <Link href={"https://members.acmucsd.com/login"}>
              <a>Member Login</a>
            </Link>
          </li>
          <li className="navigation-bar__nav-button">
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
          {navLinks.map((link, key) => (
            <li key={key} className="navigation-bar__nav-button">
              <Link href={link.to}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!menuState && (
        <div className="navbar-mobile-div">
          <div className="navbar-mobile">
            <Link href="/">
              <a>
                <img src={ACMLogo.src} alt="ACM Logo" />
                <p>at UCSD</p>
              </a>
            </Link>
            <button className="icon" onClick={toggleMenu} type="button">
              <img
                className="menuicon"
                src={MenuButtonIcon.src}
                alt="Menu Icon"
              />
            </button>
          </div>
        </div>
      )}
      {menuState && (
        <div className="mobile-links">
          <button className="closebutton" onClick={toggleMenu} type="button">
            <img
              className="closeicon"
              src={CloseMenuButton.src}
              color="white"
              alt="Menu Icon"
            />
          </button>
          <Link href="/about">
            <a onClick={toggleMenu}>About Us</a>
          </Link>
          <Link href="/communities">
            <a onClick={toggleMenu}>Communities</a>
          </Link>
          <Link href="/sponsor">
            <a onClick={toggleMenu}>Sponsor</a>
          </Link>
          <Link href="#contact">
            <a onClick={toggleMenu}>Contact</a>
          </Link>
          <a href="https://members.acmucsd.com/login">Login</a>
        </div>
      )}

      <div className="rainbow" />
    </div>
  );
};

export default NavigationBar;
