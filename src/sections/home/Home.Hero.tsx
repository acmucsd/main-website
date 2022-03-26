import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Image from "next/image";

import Button from "src/components/Button";
import ScrollDownArrow from "src/components/ScrollDownArrow";
import CoolLogo from "public/assets/cool_logo_1000x1000.png";
import CoolLogoMobile from "public/assets/cool_logo.png";

const HomeHero: React.FC = () => {
  return (
    <section className="home__hero">
      <div className="home__hero--grid">
        <div className="home__hero--grid--cool-img">
          <img
            src={CoolLogoMobile.src}
            srcSet={`${CoolLogoMobile.src} 500w, ${CoolLogo.src} 1000w`}
            alt="Cool Logo"
          />
        </div>
        <div className="home__hero--grid--description">
          <div className="description-block">
            <Typist
              className="join"
              avgTypingDelay={40}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1400 }}
            >
              <span>We are UCSD&#39;s largest</span>
              <br />
              <span className="blue">code + </span>
              <span className="pink">design + </span>
              <span className="purple">innovate</span>
              <br />
              <span>community.&nbsp;</span>
            </Typist>
            <div className="buttons">
              <Button
                internalLink
                title="Find Events"
                link="/events"
                type="primary"
              />
              <a href="https://members.acmucsd.com" target={"_blank"} rel="noreferrer">Member Login {'>'}</a>
            </div>
          </div>
        </div>
        <ScrollDownArrow />
      </div>
    </section>
  );
};

export default HomeHero;
