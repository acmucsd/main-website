import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import "./style.less"
import * as Scroll from "react-scroll"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import AILogo from "../../assets/logos/acm-ai.svg"
import CyberLogo from "../../assets/logos/acm-cyber.svg"
import DesignLogo from "../../assets/logos/acm-design.svg"
import HackLogo from "../../assets/logos/acm-hack.svg"
import InnovateLogo from "../../assets/logos/acm-innovate.svg"

const CommunitiesGrid = () => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  return (
    <VisibilitySensor
      onChange={isVisible => {
        if (isVisible) setHasBeenVisible(true)
      }}
    >
      <div className="communitiesGrid">
        <a
          href="/communities#AI"
          className={`communitiesGrid__community ${
            hasBeenVisible ? "ai--visible" : " "
          }`}
        >
          <img src={AILogo} alt="ACM AI" />
          <div className="communitiesGrid__community__label">
            <h3>
              <span>ACM</span> AI
            </h3>
          </div>
        </a>
        <a
          href="/communities#Cyber"
          className={`communitiesGrid__community ${
            hasBeenVisible ? "cyber--visible" : " "
          }`}
        >
          <img src={CyberLogo} alt="ACM Cyber" />
          <div className="communitiesGrid__community__label">
            <h3>
              <span>ACM</span> Cyber
            </h3>
          </div>
        </a>
        <a
          href="/communities#Design"
          className={`communitiesGrid__community ${
            hasBeenVisible ? "design--visible" : " "
          }`}
        >
          <img src={DesignLogo} alt="ACM Design" />
          <div className="communitiesGrid__community__label">
            <h3>
              <span>ACM</span> Design
            </h3>
            <p>Coming Soon</p>
          </div>
        </a>
        <a
          href="/communities#Hack"
          className={`communitiesGrid__community ${
            hasBeenVisible ? "hack--visible" : " "
          }`}
        >
          <img src={HackLogo} alt="ACM Hack" />
          <div className="communitiesGrid__community__label">
            <h3>
              <span>ACM</span> Hack
            </h3>
          </div>
        </a>
        <a
          href="/communities#Innovate"
          className={`communitiesGrid__community ${
            hasBeenVisible ? "innovate--visible" : " "
          }`}
        >
          <img src={InnovateLogo} alt="ACM Innovate" />
          <div className="communitiesGrid__community__label">
            <h3>
              <span>ACM</span> Innovate
            </h3>
          </div>
        </a>
      </div>
    </VisibilitySensor>
  )
}
export default CommunitiesGrid
