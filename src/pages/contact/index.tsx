import React from 'react';

import DiscordLogo from '../../assets/discord.svg';
import FacebookLogo from '../../assets/facebook.svg';
import MediumLogo from '../../assets/medium.svg';
import GitHubLogo from '../../assets/github.svg';
import InstagramLogo from '../../assets/instagram.svg';

import './style.less';

const Contact: React.FC = () => (
  <div id="contact" className="contact">
    <span className="contactLabel">Connect with Us!</span>
    <span className="emailContact">
      <a href="mailto:acmucsd@gmail.com">contact@acmucsd.org</a>
    </span>
    <div className="contactIcons">
      <a href="https://www.facebook.com/acmucsd/">
        <img src={FacebookLogo} alt="Facebook" />
      </a>
      <a href="https://medium.com/acmucsd">
        <img src={MediumLogo} alt="Medium" />
      </a>
      <a href="https://github.com/acmucsd">
        <img src={GitHubLogo} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/acm.ucsd/">
        <img src={InstagramLogo} alt="Instagram" />
      </a>
      <a href="https://www.acmurl.com/discord">
        <img src={DiscordLogo} alt="Discord" />
      </a>
    </div>
  </div>
);

export default Contact;
