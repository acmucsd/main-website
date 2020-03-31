import React from 'react';
import './style.less';

interface ButtonProps extends React.Props<any> {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({title, link}) => {
  return (
      <a href={link} className="button">
        <div>
          {title}
        </div>
      </a>
  );
}

export default Button;
