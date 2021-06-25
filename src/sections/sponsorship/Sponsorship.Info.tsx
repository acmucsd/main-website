import React, { useEffect } from "react"
import "./styles.less"

import Arrow from "../../assets/arrow.svg"
import SponsorHeroLogo from "../../assets/sponsor-images/sponsor_hero.png"

const SponsorshipInfo: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false)

  useEffect(() => {
    if (!scrolled) {
      const handleScroll = () => {
        setScrolled(true)
        window.removeEventListener("scroll", handleScroll)
        return undefined
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
    return undefined
  }, [scrolled])

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
          src={SponsorHeroLogo}
          alt="Sponsor Logo"
        />
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
      {scrolled ? null : <img className="arrow" alt="" src={Arrow} />}
    </section>
  )
}

export default SponsorshipInfo
