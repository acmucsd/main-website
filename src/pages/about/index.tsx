import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './style.less';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="numbers">
        <div className="number">
          <span className="count member">
            <CountUp start={0} end={1000} redraw={true}>
              {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                  </VisibilitySensor>
              )}
            </CountUp> +
          </span>
          <span className="description">
            members
          </span>
        </div>
        <div className="number">
          <span className="count event">
            <CountUp start={0} end={120} redraw={true}>
              {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                  </VisibilitySensor>
              )}
            </CountUp> +
          </span>
          <span className="description">
            events
          </span>
        </div>
        <div className="number">
          <span className="count global">
            <CountUp start={0} end={100} redraw={true}>
              {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                  </VisibilitySensor>
              )}
            </CountUp> k
          </span>
          <span className="description">
            members globally
          </span>
        </div>
      </div>
      <div className="summary">
        <h1>Join the club.</h1>
        <p>
          ACM UCSD is an inclusive community of students passionate about
          technology. We welcome all majors, backgrounds, and skill-levels.
        </p>
      </div>
    </div>
  )
};

export default About;
