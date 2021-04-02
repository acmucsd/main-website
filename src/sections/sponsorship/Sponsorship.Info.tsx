import React from "react"
import "./styles.less"

import SponsorHeroLogo from "../../assets/sponsor_hero.svg"

const SponsorshipInfo: React.FC = () => {
  return (
    <section className="sponsorship__info">
      <img src={SponsorHeroLogo} alt="Sponsor Logo" />
      <div className="sponsorship__info__text">
        <h1 className="sponsorship__info__text__title">Sponsor</h1>
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
