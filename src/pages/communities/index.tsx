import React from 'react';
import './style.less';
import AiLogo from '../../assets/ai_logo.svg';
import CyberLogo from '../../assets/cyber_logo.svg';
import DesignLogo from '../../assets/design_logo.svg';
import HackLogo from '../../assets/hack_logo.svg';
import InnovateLogo from '../../assets/innovate_logo.svg';

const Communities: React.FC = () => (
  <div className="communities">
    <div className="header">
      <h1>Communities</h1>
      <p>Looking for a more specialized focus? Check out our communities!</p>
    </div>

    <div className="communities-container">
      <a className="community" href="https://ai.acmucsd.com/">
        <img src={AiLogo} alt="Ai Logo" />
        <div className="info">
          <div className="info-container">
            <h1 className="logo-name ai"> ACM AI</h1>
            <h2>Artificial Intelligence</h2>
          </div>
        </div>
      </a>

      <a className="community" href="https://acmurl.com/cyberdiscord">
        <img src={CyberLogo} alt="Cyber Logo" />
        <div className="info">
          <div className="info-container">
            <h1 className="logo-name cyber">ACM Cyber</h1>
            <h2>Computer Security</h2>
          </div>
        </div>
      </a>

      <a className="community" href="https://acmurl.com/design">
        <img src={DesignLogo} alt="Design Logo" />
        <div className="info">
          <div className="info-container">
            <h1 className="logo-name design">ACM Design</h1>
            <h2>Human Computer Interaction</h2>
          </div>
        </div>
      </a>

      <a className="community" href="https://acmurl.com/joinhack">
        <img src={HackLogo} alt="Hack Logo" />
        <div className="info">
          <div className="info-container">
            <h1 className="logo-name hack">ACM Hack</h1>
            <h2>Software Engineering</h2>
          </div>
        </div>
      </a>

      <a
        className="community"
        href="https://docs.google.com/forms/d/1gdwiqO3SLw_OXqM2ZWHuFjXHXEL4xBXtNLgvrhfB1pk/edit"
      >
        <img src={InnovateLogo} alt="Innovate Logo" />
        <div className="info">
          <div className="info-container">
            <h1 className="logo-name innovate">ACM Innovate</h1>
            <h2>Entrepreneurship</h2>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default Communities;
