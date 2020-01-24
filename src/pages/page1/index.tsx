import React from 'react';
import './style.less';

import acmucsd from '../../assets/acmucsd.svg';
import Button from '../../components/button';
import logo from '../../assets/logo.svg';

const Page1: React.FC = () => {
  return (
    <div className="page1">
      <img alt="acmucsd" className="acmucsd" src={acmucsd} />
      <div className="text">
        <img alt="logo" className="logo" src={logo} />
        <h1>Welcome to</h1>
        <h1>ACM UC San Diego</h1>
        <p>
          The largest computing organization on campus. Focused on design,
          coding, and boba.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Page1;
