import React from 'react';

import 'typeface-nunito';
import "./style.less";
import acmucsdLogo from '../../assets/acmucsd.svg';
import acmLogo from '../../assets/acm.svg';
import Button from '../../components/button';

const Home: React.FC = () => {
  return (
    <div className="page home">
      <div>
        <img src={acmucsdLogo} alt="ACM UCSD Logo" className="acmucsdLogo"></img>
      </div>
      <div>
        <img src={acmLogo} alt="ACM Logo" className="acmLogo"></img>
        <h1>Welcome to ACM UC San Diego!</h1>
        <h3>
          The largest computing organization on campus.
          Focused on design, coding, and boba.
        </h3>
        <Button />
      </div>
    </div>
  );
};

export default Home;
