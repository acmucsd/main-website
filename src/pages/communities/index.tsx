import React from 'react';
import './style.less';
import AiLogo from '../../assets/ai_logo.svg';
import CyberLogo from '../../assets/cyber_logo.svg';
import DesignLogo from '../../assets/design_logo.svg';
import HackLogo from '../../assets/hack_logo.svg';
import InnovateLogo from '../../assets/innovate_logo.svg';

const Communities: React.FC = () => {
  return (
    <div className="communities-page">
      <div className="communities-header">
        <h1>Communities</h1>
        <p>ACM consists of 5 orgs that each focus on a specific area of tech.</p>
      </div>

      <div className="communities-container">
        <a className="community" href="https://ai.acmucsd.com/">
          <img src={AiLogo} alt="Ai Logo" />
          <div className="info">
            <h1 className="logo-name ai"> ACM AI</h1>
            <h2>Machine Learning</h2>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/cyberdiscord">
          <img src={CyberLogo} alt="Cyber Logo" />
          <div className="info">
            <h1 className="logo-name cyber">ACM Cyber</h1>
            <h2>Cybersecurity</h2>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/design">
          <img src={DesignLogo} alt="Design Logo" />
          <div className="info">
            <h1 className="logo-name design">ACM Design</h1>
            <h2>Coming Soon</h2>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/joinhack">
          <img src={HackLogo} alt="Hack Logo" />
          <div className="info">
            <h1 className="logo-name hack">ACM Hack</h1>
            <h2>Software Engineering</h2>
          </div>
        </a>

        <a className="community" href="https://docs.google.com/forms/d/1gdwiqO3SLw_OXqM2ZWHuFjXHXEL4xBXtNLgvrhfB1pk/edit">
          <img src={InnovateLogo} alt="Innovate Logo" />
          <div className="info">
            <h1 className="logo-name innovate">ACM Innovate</h1>
            <h2>Entrepreneurship</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Communities;
