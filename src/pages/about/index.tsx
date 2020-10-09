import React from 'react';
import Number from '../../components/statistic';
import FadeIn from '../../components/fadein';

import './style.less';

const About: React.FC = () => (
  <FadeIn>
    <div className="about">
      <div className="header">
        <h1>Join the club.</h1>
        <p>We welcome everyone to explore their interests in technology!</p>
      </div>
      <div className="numbers">
        <Number color="#FF6F6F" description="ucsd members" extension="+" number={1000} />
        <Number color="#F9A857" description="annual events" extension="+" number={120} />
        <Number color="#51C0C0" description="global members" extension="k" number={100} />
      </div>
    </div>
  </FadeIn>
);

export default About;
