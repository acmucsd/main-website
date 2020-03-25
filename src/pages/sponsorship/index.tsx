import React from 'react';

import GoogleLogo from '../../assets/google_logo.png';
import IntuitLogo from '../../assets/intuit_logo.png';
import MapboxLogo from '../../assets/mapbox_logo.png';
import TescLogo from '../../assets/tesc_logo.png';
import JsoeLogo from '../../assets/jsoe_logo.png';
import CseLogo from '../../assets/cse_logo.png';

import "./style.less";

const Sponsorship: React.FC = () => {
  const imageUrls = [GoogleLogo, IntuitLogo, MapboxLogo, TescLogo, JsoeLogo, CseLogo];
  const imageAlts = ['google', 'intuit', 'mapbox', 'tesc', 'jsoe', 'cse']
  const images = imageUrls.map((image, i) => <img src={image} alt={imageAlts[i]} key={i}/>);
  return (
    <div id="sponsor-info" className="sponsorship">
      <h1>Impact a community of 1000+ aspiring developers, designers, and innovators</h1>
      <div className="sponsor-impact">
        <h3>With your support we are empowered to...</h3>
          <ul>
            <li>Host 125+ events for 2000+ students </li>
            <li>Connect students with professionals</li> 
            <li>Mentor students in software projects </li>
            <li>Send student researchers to conferences</li>
            <li>Inspire the next generation of computing</li>
          </ul>
      </div>
      <div className="buttonRow">
        <a href="#sponsors"><button type="button">Our Sponsors</button></a>
        <a href="#contact"><button type="button">Contact</button></a>
      </div>
      <h1>Thank you sponsors and collaborators!</h1>
      <div id="sponsors">
        {images}
      </div>
    </div>
  );
};

export default Sponsorship;
