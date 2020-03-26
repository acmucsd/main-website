import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

interface ButtonProps extends React.Props<any> {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({title, link}) => {
  return (
    <div className="button">
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default Button;
