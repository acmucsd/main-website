import React from 'react';

import CoolGraph from '../../assets/pie_chart_2.svg';
import Button from '../../components/button';

import GoogleLogo from '../../assets/google_logo.svg';
import IntuitLogo from '../../assets/intuit_logo.png';
import MapboxLogo from '../../assets/mapbox_logo.svg';
import TescLogo from '../../assets/tesc_logo.png';
import JsoeLogo from '../../assets/jsoe_logo.png';
import CseLogo from '../../assets/cse_logo.png';

import './style.less';

const Sponsorship: React.FC = () => {
  const imageUrls = [GoogleLogo, IntuitLogo, MapboxLogo, TescLogo, JsoeLogo, CseLogo];
  const imageAlts = ['google', 'intuit', 'mapbox', 'tesc', 'jsoe', 'cse'];
  const images = imageUrls.map((image, i) => (
    <div className="sponsor-img">
      <img src={image} alt={imageAlts[i]} key={i} />
    </div>
  ));

  return (
    <div id="sponsor-info" className="sponsorship">
      <h1>Impact a community of 1000+ aspiring developers, designers, and innovators</h1>
      <div className="sponsor-impact-container">
        <div className="sponsor-impact sponsor-impact-text">
          <h3>
            <b>With your support we are empowered to...</b>
          </h3>
          <ul>
            <li>Host 125+ events for 2000+ students </li>
            <li>Connect students with professionals</li>
            <li>Mentor students in software projects </li>
            <li>Send student researchers to conferences</li>
            <li>Inspire the next generation of computing</li>
          </ul>
          <div className="buttons">
            <Button link="#sponsors" title="Our Sponsors" />
            <Button link="#contact" title="Contact" />
          </div>
        </div>
        <div className="sponsor-impact sponsor-impact-img-container">
          <img src={CoolGraph} alt="pie chart of ACM members' majors" />
        </div>
      </div>
      <h1>Thank you sponsors and collaborators!</h1>
      <div id="sponsors">{images}</div>
    </div>
  );
};

export default Sponsorship;
