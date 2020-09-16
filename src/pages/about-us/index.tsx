import React from 'react';
import './style.less';
import AboutImg from '../../assets/about-us.png';
import Button from '../../components/button';

const AboutUs: React.FC = () => (
  <div className="about-us">
    <h1>Join our member-driven computing community</h1>
    <div className="about-info">
      <div className="about-description">
        <div className="about-text">
          <p>
            ACM was founded because we saw a need for a more together student community among
            individuals interested in technology - computing, &nbsp;
            <b>design</b>
            {', '}
            <b>hacking</b>
            {', '}
            <b>cybersecurity</b>
            {', '}
            and
            <span> </span>
            <b>graphics</b>
            <span> </span>
            to name a few. We welcome you to drop by our events!
          </p>
          <br />
          <br />
          <span>
            Interested in getting more involved? Join the Diamond Staff program to volunteer for fun
            socials or mentor technical workshops for 2000+ students per quarter.
          </span>
        </div>
        <div className="buttons">
          <Button link="https://members.acmucsd.com/" title="Student Portal" />
          <Button link="#" title="Diamond Staff" />
        </div>
      </div>
      <div className="about-image">
        <img src={AboutImg} alt="ACM's peeps" />
      </div>
    </div>
  </div>
);

export default AboutUs;
