import React, { useState, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import "./style.less"
import ACMLogo from "../../assets/ACMWhiteLogo.png"
import MenuButtonIcon from "../../assets/menubutton.svg"
import CloseMenuButton from "../../assets/closemenubutton.svg"

const navLinks = [
  { to: "/sponsor", text: "Sponsor" },
  { to: "/communities", text: "Communities" },
  { to: "/about", text: "About Us" },
]

const NavigationBar: React.FC = () => {
  const [menuState, setMenuState] = useState(false)
  const toggleMenu = () => {
    setMenuState(!menuState)
  }
  const scrollToContacts = (): void => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    setMenuState(false)
  }
  return (
    <div className="fixed-nav">
      <div className="navigation-bar">
        <ul>
          <li className="navigation-bar__logo">
            <Link to="/">
              <img src={ACMLogo} alt="ACM Logo" />
              <p>at UCSD</p>
            </Link>
          </li>
          <li className="navigation-bar__login">
            <Link to={"https://members.acmucsd.com/login"}>Member Login</Link>
          </li>
          <li className="navigation-bar__nav-button">
            <Link to="#contact" onClick={scrollToContacts}>
              Contact
            </Link>
          </li>
          {navLinks.map(link => (
            <li className="navigation-bar__nav-button">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!menuState && (
        <div className="navbar-mobile-div">
          <div className="navbar-mobile">
            <Link to="/">
              <img src={ACMLogo} alt="ACM Logo" />
              <p>at UCSD</p>
            </Link>
            <button className="icon" onClick={toggleMenu} type="button">
              <img className="menuicon" src={MenuButtonIcon} alt="Menu Icon" />
            </button>
          </div>
        </div>
      )}
      {menuState && (
        <div className="mobile-links">
          <button className="closebutton" onClick={toggleMenu} type="button">
            <img
              className="closeicon"
              src={CloseMenuButton}
              color="white"
              alt="Menu Icon"
            />
          </button>
          <Link to="/about">About Us</Link>
          <Link to="/communities">Communities</Link>
          <Link to="/sponsor">Sponsor</Link>
          <Link to="#contact" onClick={scrollToContacts}>
            Contact
          </Link>
          {/* <Link
            to="#contact"
            onClick={(): void => {
              toggleMenu()
              scrollToContacts()
            }}
          >
            Contact
          </Link> */}
          <a href="https://members.acmucsd.com/login" onClick={toggleMenu}>
            Login
          </a>
        </div>
      )}

      <div className="rainbow" />
    </div>
  )
}

export default NavigationBar
