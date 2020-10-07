import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './style.less';

interface NumberProps {
  color: string;
  description: string;
  extension: string;
  number: number;
}

const Number: React.FC<NumberProps> = ({
  color, description, extension, number,
}) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  return (
    <div
      className="number"
      style={{
        borderColor: color,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setHasBeenVisible(true);
          }}
        >
          {hasBeenVisible ? (
            <CountUp
              className={`count ${color}`}
              start={0}
              end={number}
              suffix={extension}
              redraw
            />
          ) : (
            <span className="count">
              0
              {extension}
            </span>
          )}
        </VisibilitySensor>
      </span>
      <span className="description">{description}</span>
    </div>
  );
};

export default Number;
