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
  { title: "Discord", value: "discord.com/somelink/", icon: DiscordIcon },
  { title: "Medium", value: "medium.com/acmucsd", icon: MediumIcon },
  { title: "Facebook", value: "facebook.com/acmucsd/", icon: FacebookIcon },
  { title: "Github", value: "github.com/acmucsd", icon: GithubIcon },
  { title: "Instagram", value: "instagram.com/acm.ucsd", icon: InstagramIcon },
]
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img className="acmBlueFade" src={ACMBlueFade} />
      <div className="footerContainer">
        <div className="footerContents">
          <h2>Connect With Us!</h2>
          <div className="footerContents__contact">
            {cardContents.map(item => (
              <div className="footerContents__contact__card">
                <img src={item.icon} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="footerContents__newsletter">
            <h2>Newsletter</h2>
            <p>Receive weekly events and news!</p>
            <input
              type="text"
              id="emailinput"
              name="fname"
              value="my@email.com"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mobileFooterContainer">
        <div className="footerContainer--left">
          <h2>Connect With Us!</h2>
          <p>acmucsd@gmail.com</p>
          <div className="community-links">
            <button>
              <img src={FacebookIcon} alt="Facebook" />
            </button>
            <button>
              <img src={MediumIcon} alt="Medium" />
            </button>
            <button>
              <img src={GithubIcon} alt="GitHub" />
            </button>
            <button>
              <img src={InstagramIcon} alt="Instagram" />
            </button>
            <button>
              <img src={DiscordIcon} alt="Discord" />
            </button>
          </div>
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
