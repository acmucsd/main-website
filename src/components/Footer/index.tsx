import React, { useState, useEffect } from "react"
import { Link, navigate, graphql, useStaticQuery } from "gatsby"
import "./style.less"

import FacebookIcon from "../../assets/facebook.svg"
import MediumIcon from "../../assets/medium.svg"
import GithubIcon from "../../assets/github.svg"
import InstagramIcon from "../../assets/instagram.svg"
import DiscordIcon from "../../assets/discord.svg"

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div>
        <div className="footerContainer--left">
          <h2>Contact us!</h2>
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
        <div className="footerContainer--right">
          <h2>Newsletter</h2>
          <p>Receive weekly events and news!</p>
          <div className="newsLetterContainer">
            <input type="text" id="emailinput" name="fname" value="my@email.com" />
            <button>></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
