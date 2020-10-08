import React from 'react';

import BitByte from '../../assets/bit-byte.png';
import SideProjects from '../../assets/projects.png';
import Board from '../../assets/board.png';
import Hackathon from '../../assets/hackathon.png';

import './style.less';

const GetInvolved: React.FC = () => (
  <div className="get-involved">
    <div className="get-involved-header">
      <h1>Get Involved</h1>
      <p>Be a part of our programs to learn, network, or just hang out.</p>
    </div>
    <div className="container">
      <div className="card">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScGIH0lEVkAMreKarFF5KBfehjJXtzp0NB3t6NergXzYTPw9A/viewform">
          <img src={BitByte} alt="Bit-Byte" className="image clickable" />
        </a>
        <div className="card-content">
          <h3 className="card-title pink">Bit-Byte</h3>
          <p className="card-text">
            Join ACM’s Big-Little program that pairs students to make lifelong friendships!
          </p>
        </div>
      </div>
      <div className="card">
        <a href="https://acmurl.com/fallsp">
          <img src={SideProjects} alt="Side Projects" className="image clickable" />
        </a>
        <div className="card-content">
          <h3 className="card-title blue">Projects</h3>
          <p className="card-text">
            Sign up for a side project to grow your skills in coding, design, or project management!
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Board} alt="Board" className="image" />
        <div className="card-content">
          <h3 className="card-title purple">Staff</h3>
          <p className="card-text">Be a part of ACM Staff to help make everything we do happen!</p>
        </div>
      </div>
      <div className="card">
        <a href="https://acmurl.com/acm-hackathon-interest">
          <img src={Hackathon} alt="Hackathon" className="image clickable" />
        </a>
        <div className="card-content">
          <h3 className="card-title orange">Hackathon</h3>
          <p className="card-text">
            Join our hackathon committee to plan ACM’s largest event of the year!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default GetInvolved;
