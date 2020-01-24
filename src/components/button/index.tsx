import React from 'react';
import './style.less';

const Button: React.FC = () => {
  return (
    <div className="buttonContainer">
      <a href="https://members.acmucsd.com/">
        <div className="button">
          Login
        </div>
      </a>
    </div>
  );
};

export default Button;
