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

interface CommunitiesGridProps {
  verticalLayout?: boolean
  colLayout?: boolean
}

const defaultProps: CommunitiesGridProps = {
  verticalLayout: false,
  colLayout: false,
}

const CommunitiesGrid: React.FC<CommunitiesGridProps> = ({
  verticalLayout,
  colLayout,
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(true)

  if (colLayout) {
    return (
      <div className="colWrapper">
        <div
          className={
            verticalLayout ? "communitiesGrid vertical" : "communitiesGrid"
          }
        >
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
              <p>Artificial Intelligence</p>
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
              <p>Cyber Security</p>
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
              <p>Design and Interaction</p>
            </div>
          </a>
        </div>
        <div className="communitiesGrid">
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
              <p>Software Engineering</p>
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
              <p>Entrepreneurship</p>
            </div>
          </a>
        </div>
      </div>
    )
  } else {
    return (
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
            <p>Artificial Intelligence</p>
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
            <p>Cyber Security</p>
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
            <p>Design and Interaction</p>
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
            <p>Software Engineering</p>
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
            <p>Entrepreneurship</p>
          </div>
        </a>
      </div>
    )
  }
}

CommunitiesGrid.defaultProps = defaultProps
export default CommunitiesGrid
