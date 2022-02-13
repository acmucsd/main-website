import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowIcon from "public/assets/arrow.svg";

const SponsorshipInfo: React.FC<{ image: string }> = ({ image }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section>
      <div className="sponsorship__info desktop">
        <div className="sponsorship__info__text">
          <h1 className="sponsorship__info__text__title">Sponsor</h1>
          <h2 className="sponsorship__info__text__description">
            Impact a community of 1000+ aspiring
            <span className="blue"> developers</span>,
            <span className="pink"> designers</span>, and
            <span className="purple"> innovators</span>!
          </h2>
        </div>
        <img
          className="sponsorship__info__img"
          src={image}
          alt="Sponsor Logo"
        />
      </div>
      <div className="sponsorship__info mobile">
        <h1 className="sponsorship__info__text__title">Sponsor</h1>
        <img
          className="sponsorship__info__img"
          src={image}
          alt="Sponsor Logo"
        />
        <h2 className="sponsorship__info__text__description">
          Impact a community of 1000+ aspiring
          <span className="blue"> developers</span>,
          <span className="pink"> designers</span>, and
          <span className="purple"> innovators</span>!
        </h2>
      </div>
      {scrolled ? null : (
        <img
          className="arrow"
          onClick={() =>
            window.scrollBy({
              top: window.innerHeight - 78,
              behavior: "smooth",
            })
          }
          alt=""
          src={ArrowIcon.src}
        />
      )}
    </section>
  );
};

export default SponsorshipInfo;
