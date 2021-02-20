import React, { useState, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import "./style.less"
import ACMLogo from "../../assets/acm.svg"

const navLinks = [
  { to: "/about", text: "about" },
  { to: "/sponsor", text: "sponsor" },
  { to: "/community", text: "community" },
  { to: "/contact", text: "contact" },
]

const NavigationBar: React.FC = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar__logo">
        <Link to="/">
          <img src={ACMLogo} alt="ACM Logo" />
        </Link>
      </div>
      <li className="navigation-bar__button--login">
        <Link to={"/login"}>member login</Link>
      </li>

      <ul className="navigation-bar__button-container">
        {navLinks.map(link => (
          <li className="navigation-bar__button">
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigationBar
