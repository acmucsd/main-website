import React, { useState, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import "./style.less"
import ACMLogo from "../../assets/acm.svg"

const navLinks = [
  { to: "/contact", text: "Contact" },
  { to: "/sponsor", text: "Sponsorship" },
  { to: "/about", text: "About Us" },
  { to: "/events", text: "Events" },
]

const NavigationBar: React.FC = () => {
  return (
    <div className="fixedNav">
      <div className="navigation-bar">
        <ul>
          <li className="navigation-bar__logo">
            <Link to="/">
              <img src={ACMLogo} alt="ACM Logo" />
            </Link>
          </li>
          <li className="navigation-bar__nav-button--login">
            <Link to={"/login"}>Login</Link>
          </li>
          {navLinks.map(link => (
            <li className="navigation-bar__nav-button">
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="rainbow" />
    </div>
  )
}

export default NavigationBar
