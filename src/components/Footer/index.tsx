import React, { useState, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import "./style.less"

import FacebookIcon from "../../assets/facebook.svg"
import MediumIcon from "../../assets/medium.svg"
import GithubIcon from "../../assets/github.svg"
import InstagramIcon from "../../assets/instagram.svg"
import DiscordIcon from "../../assets/discord.svg"
import EmailIcon from "../../assets/email.svg"

import ACMBlueFade from "../../assets/ACMBlueFade.svg"

const cardContents = [
  { title: "Email", value: "contact@acmucsd.org", icon: EmailIcon },
  {
    title: "Discord",
    value: "discord.com/somelink",
    icon: DiscordIcon,
  },
  { title: "Medium", value: "medium.com/acmucsd", icon: MediumIcon },
  {
    title: "Facebook",
    value: "facebook.com/acmucsd",
    icon: FacebookIcon,
  },
  { title: "Github", value: "github.com/acmucsd", icon: GithubIcon },
  {
    title: "Instagram",
    value: "instagram.com/acm.ucsd",
    icon: InstagramIcon,
  },
]
const Footer: React.FC = () => {
  const [email, setEmail] = useState("")
  return (
    <div className="footer">
      <img className="acmBlueFade" src={ACMBlueFade} />
      <div className="footerContainer">
        <div className="footerContents">
          <h2>Connect With Us!</h2>
          <div className="footerContents__contact">
            {cardContents.map(item => {
              let linkprefix = item.title === "Email" ? "mailto:" : "https://"
              return (
                <div className="footerContents__contact__card">
                  <img src={item.icon} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <a href={linkprefix + item.value}>{item.value}</a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="footerContents__newsletter">
            <h2>Newsletter</h2>
            <p>Receive weekly events and news!</p>
            <input
              type="text"
              id="emailinput"
              name="fname"
              placeholder="my@email.com"
              onChange={e => setEmail(e.target.value)}
            />
            <button className={email.length > 0 ? "blue" : ""}>
              Subscribe!
            </button>
          </div>
        </div>
      </div>
      <div className="mobileFooterContainer">
        <h2>Connect With Us!</h2>
        <a href="mailto:contact@acmucsd.org">contact@acmucsd.org</a>
        <div className="community-links">
          <a href="http://facebook.com/acmucsd/">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="http://medium.com/acmucsd">
            <img src={MediumIcon} alt="Medium" />
          </a>
          <a href="http://github.com/acmucsd">
            <img src={GithubIcon} alt="GitHub" />
          </a>
          <a href="http://instagram.com/acm.ucsd">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="http://discord.com/somelink/">
            <img src={DiscordIcon} alt="Discord" />
          </a>
        </div>
        <div className="mobileFooterContainer__newsletter">
          <h2>Newsletter</h2>
          <p>Receive weekly events and news!</p>
          <input
            type="text"
            id="emailinput"
            name="fname"
            placeholder="my@email.com"
          />
          <button>Subscribe!</button>
        </div>
      </div>
    </div>
  )
}

export default Footer

/*
<div>
        
        <div className="footerContainer--right">
          <h2>Newsletter</h2>
          <p>Receive weekly events and news!</p>
          <div className="newsLetterContainer">
            <input type="text" id="emailinput" name="fname" value="my@email.com" />
            <button>></button>
          </div>
        </div>
      </div>
*/
