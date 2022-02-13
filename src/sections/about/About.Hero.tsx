import { useState, useEffect } from "react";
import Image from "next/image";

import ArrowIcon from "public/assets/arrow.svg";

const AboutHero: React.FC<{ isMobile: boolean; image: string }> = ({
  isMobile,
  image,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="about__hero">
      <div className="about__hero__description">
        <div>
          <h1>What is ACM at UCSD?</h1>
          {!isMobile ? null : <img src={image} alt="About Hero Image" />}
        </div>
        <h3>
          We are the Association for Computing Machinery at UCSD! <br />
          <br />
          We are an inclusive member-first community for all who are interested
          in the field of computing. We welcome all skill levels and majors!
        </h3>
      </div>
      {isMobile ? null : (
        <img src={image} className="hero-img" alt="About Hero Image" />
      )}
      {scrolled ? null : (
        <img
          className="arrow"
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight - 78,
            })
          }
          alt=""
          src={ArrowIcon.src}
        />
      )}
    </section>
  );
};

export default AboutHero;
