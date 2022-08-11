import ScrollDownArrow from "src/components/ScrollDownArrow";
import CoolLogo from "public/assets/cool_logo_1000x1000.png";
import CoolLogoMobile from "public/assets/cool_logo.png";
import Link from "next/link";

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
            <div>
              <span>We are UCSD&#39;s largest</span>
              <br />
              <span className="blue">hacking + </span>
              <span className="pink">design + </span>
              <span className="purple">innovate</span>
              <br />
              <span>community.&nbsp;</span>
            </div>
            <div className="buttons">
              <a
                className="hero-btn btn-outlined"
                href="https://members.acmucsd.com"
                target="_blank"
                rel="noreferrer"
              >
                Join Us &gt;
              </a>
              <Link href="/events">
                <a className="hero-btn">Explore Events &gt;</a>
              </Link>
            </div>
          </div>
        </div>
        <ScrollDownArrow />
      </div>
    </section>
  );
};

export default HomeHero;
