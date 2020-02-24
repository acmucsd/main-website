import React from 'react';
import Typist from 'react-typist';

import CoolLogo from '../../assets/cool_logo.png';

import "./style.less";

const Home: React.FC = () => {
  return (
    <div className="homeGrid">
      <div className="coolImg">
        <img src={CoolLogo} alt="Cool Logo" />
      </div>
      <div className="homeDescription">
        <div className="descriptionBlock">
        <Typist className="join" avgTypingDelay={40}>
          <span>Join UCSD's largest</span>
          <br />
          <span className="codeSpan">code + </span>
          <span className="designSpan">design + </span>
          <span className="innovateSpan">innovate</span>
          <br />
          <span>community: 1000+ members</span>
          <br />
          <span>and counting.</span>
        </Typist>
        <button type="button" className="learnMore"><span>Learn More</span></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
