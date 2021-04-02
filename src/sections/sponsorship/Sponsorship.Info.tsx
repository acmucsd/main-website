import React from "react"
import "./styles.less"

import SponsorHeroLogo from "../../assets/sponsor_hero.svg"
import SponsorHeroLogoMobile from "../../assets/sponsor_hero_mobile.svg"

const SponsorshipInfo: React.FC = () => {
  return (
    <section>
      <div className="sponsorship__info desktop">
        <img
          className="sponsorship__info__img"
          src={SponsorHeroLogo}
          alt="Sponsor Logo"
        />
        <div className="sponsorship__info__text">
          <h1 className="sponsorship__info__text__title">Sponsor</h1>
          <h2 className="sponsorship__info__text__description">
            Impact a community of 1000+ aspiring
            <span className="blue"> developers</span>,
            <span className="pink"> designers</span>, and
            <span className="purple"> innovators</span>!
          </h2>
        </div>
      </div>
      <div className="sponsorship__info mobile">
        <h1 className="sponsorship__info__text__title">Sponsor</h1>
        <img
          className="sponsorship__info__img"
          src={SponsorHeroLogo}
          alt="Sponsor Logo"
        />
        <h2 className="sponsorship__info__text__description">
          Impact a community of 1000+ aspiring
          <span className="blue"> developers</span>,
          <span className="pink"> designers</span>, and
          <span className="purple"> innovators</span>!
        </h2>
      </div>
    </section>
  )
}

export default SponsorshipInfo
