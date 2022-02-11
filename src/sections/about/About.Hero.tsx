import { useState, useEffect } from "react";
import Image from "next/image";

import HeroImage from "public/assets/about-images/about-hero.png";

const AboutHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      const handleScroll = () => {
        setScrolled(true);
        window.removeEventListener("scroll", handleScroll);
        return undefined;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return undefined;
  }, [scrolled]);

  return (
    <section className="about__hero">
      <div className="about__hero__description">
        <div>
          <h1>What is ACM at UCSD?</h1>
          {isMobile && <img src={HeroImage.src} alt="About Hero Image" />}
        </div>
        <h3>
          We are the Association for Computing Machinery at UCSD! <br />
          <br />
          We are an inclusive member-first community for all who are interested
          in the field of computing. We welcome all skill levels and majors!
        </h3>
      </div>
      {!isMobile && (
        <img src={HeroImage.src} className="hero-img" alt="About Hero Image" />
      )}
      {scrolled ? null : (
        <img className="arrow" alt="" src="/assets/arrow.svg" />
      )}
    </section>
  );
};

export default AboutHero;
