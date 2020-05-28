import React from 'react';
import './style.less';

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ link, title }) => (
  <a href={link} className="button">
    <div className="text">{title}</div>
  </a>
);

export default Button;
