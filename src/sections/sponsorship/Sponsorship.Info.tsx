import Image from "next/image";

import ScrollDownArrow from "src/components/ScrollDownArrow";

const SponsorshipInfo: React.FC<{ image: string }> = ({ image }) => {

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
      <ScrollDownArrow />
    </section>
  );
};

export default SponsorshipInfo;
