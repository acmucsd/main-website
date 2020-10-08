import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import Arrow from '../../assets/arrow.svg';
import CoolLogo from '../../assets/cool_logo_1000x1000.png';
import CoolLogoMobile from '../../assets/cool_logo.png';
import './style.less';
import Button from '../../components/button';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    if (!scrolled) {
      const handleScroll = () => {
        setScrolled(true);
        window.removeEventListener('scroll', handleScroll);
        return null;
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return null;
  }, [scrolled]);

  return (
    <div className="home-grid">
      <div className="cool-img">
        <img
          src={CoolLogoMobile}
          srcSet={`${CoolLogoMobile} 500w, ${CoolLogo} 1000w`}
          alt="Cool Logo"
        />
      </div>
      <div className="home-description">
        <div className="description-block">
          <Typist
            className="join"
            avgTypingDelay={40}
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1400 }}
          >
            <span>We are UCSD&#39;s largest</span>
            <br />
            <span className="code-span">code + </span>
            <span className="design-span">design + </span>
            <span className="innovate-span">innovate</span>
            <br />
            <span>community.&nbsp;</span>
          </Typist>
          <div className="buttons">
            <Button title="Join Us Now!" link="https://members.acmucsd.com" />
          </div>
        </div>
      </div>
      {scrolled ? null : <img className="arrow" alt="" src={Arrow} />}
    </div>
  );
};

export default Home;
