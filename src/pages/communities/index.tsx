import React from 'react';
import './style.less';
import AiLogo from '../../assets/ai_logo.svg';
import CyberLogo from '../../assets/cyber_logo.svg';
import DesignLogo from '../../assets/design_logo.svg';
import HackLogo from '../../assets/hack_logo.svg';
import InnovateLogo from '../../assets/innovate_logo.svg';
import FadeIn from '../../components/fadein';

const Communities: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const currentDom = domRef.current;
    if (!currentDom) {
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    observer.observe(currentDom);
    return undefined;
  }, []);

  return (
    <div className="communities">
      <FadeIn>
        <div className="header" ref={domRef}>
          <h1>Communities</h1>
          <p>Looking for a more specialized focus? Check out our communities!</p>
        </div>
      </FadeIn>

      <div className="communities-container">
        <a className="community" href="https://ai.acmucsd.com/">
          <div className={`anim ai ${isVisible ? 'is-visible' : ''}`}>
            <img src={AiLogo} alt="Ai Logo" />
            <div className="info">
              <div className="info-container">
                <h1 className="logo-name ai"> ACM AI</h1>
                <h2>Artificial Intelligence</h2>
              </div>
            </div>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/cyberdiscord">
          <div className={`anim cyber ${isVisible ? 'is-visible' : ''}`}>
            <img src={CyberLogo} alt="Cyber Logo" />
            <div className="info">
              <div className="info-container">
                <h1 className="logo-name cyber">ACM Cyber</h1>
                <h2>Computer Security</h2>
              </div>
            </div>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/design">
          <div className={`anim design ${isVisible ? 'is-visible' : ''}`}>
            <img src={DesignLogo} alt="Design Logo" />
            <div className="info">
              <div className="info-container">
                <h1 className="logo-name design">ACM Design</h1>
                <h2>Human Computer Interaction</h2>
              </div>
            </div>
          </div>
        </a>

        <a className="community" href="https://acmurl.com/joinhack">
          <div className={`anim hack ${isVisible ? 'is-visible' : ''}`}>
            <img src={HackLogo} alt="Hack Logo" />
            <div className="info">
              <div className="info-container">
                <h1 className="logo-name hack">ACM Hack</h1>
                <h2>Software Engineering</h2>
              </div>
            </div>
          </div>
        </a>

        <a
          className={`community fade-in-section ${isVisible ? 'is-visible' : ''}`}
          href="https://docs.google.com/forms/d/1gdwiqO3SLw_OXqM2ZWHuFjXHXEL4xBXtNLgvrhfB1pk/edit"
        >
          <div className={`anim innovate ${isVisible ? 'is-visible' : ''}`}>
            <img src={InnovateLogo} alt="Innovate Logo" />
            <div className="info">
              <div className="info-container">
                <h1 className="logo-name innovate">ACM Innovate</h1>
                <h2>Entrepreneurship</h2>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Communities;
