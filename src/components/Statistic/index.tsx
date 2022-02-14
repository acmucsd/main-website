import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface NumberProps {
  color: string;
  description: string;
  extension: string;
  number: number;
}

const Number: React.FC<NumberProps> = ({
  color,
  description,
  extension,
  number,
}) => {
  const [isVisible, setIsVisible] = useState(false);

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
        <InView
          as="div"
          onChange={(inView) => {
            if (!isVisible && inView) setIsVisible(true);
          }}
        >
          {isVisible ? (
            <CountUp
              className={`count ${color}`}
              start={0}
              end={number}
              suffix={extension}
              redraw
            />
          ) : (
            <span className="count">0{extension}</span>
          )}
        </InView>
      </span>
      <span className="description">{description}</span>
    </div>
  );
};

export default Number;
