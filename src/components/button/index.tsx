import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

interface ButtonProps extends React.Props<any> {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({title, link}) => {
  return (
      <Link to={link} className="button">
        <div>
          {title}
        </div>
      </Link>
  );
}

export default Button;
