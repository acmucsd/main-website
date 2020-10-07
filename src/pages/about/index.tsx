import React from 'react';
import Number from '../../components/statistic';

import './style.less';

const About: React.FC = () => (
  <div className="about">
    <div className="about-header">
      <h1>Join the club.</h1>
      <p>ACM is inclusive community passionate about technology.</p>
    </div>
    <div className="numbers">
      <Number color="#FF6F6F" description="ucsd members" extension="+" number={1000} />
      <Number color="#F9A857" description="annual events" extension="+" number={120} />
      <Number color="#51C0C0" description="global members" extension="k" number={100} />
    </div>
  </div>
);

export default About;
