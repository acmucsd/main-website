import React from 'react';
import Typist from 'react-typist';

import CoolLogo from '../../assets/cool_logo.png';

import "./style.less";

const Home: React.FC = () => {
  return (
    <div className="home-grid">
      <div className="cool-img">
        <img src={CoolLogo} alt="Cool Logo" />
      </div>
      <div className="home-description">
        <div className="description-block">
        <Typist className="join" avgTypingDelay={40}>
          <span>Join UCSD's largest</span>
          <br />
          <span className="code-span">code + </span>
          <span className="design-span">design + </span>
          <span className="innovate-span">innovate</span>
          <br />
          <span>community: 1000+ members</span>
          <br />
          <span>and counting.</span>
        </Typist>
        <a href="/" className="learn-more">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
