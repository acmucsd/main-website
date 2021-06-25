import React, { useEffect } from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import Button from "../../components/Button/Button.tsx"
import "./styles.less"

import Arrow from "../../assets/arrow.svg"
import CoolLogo from "../../assets/cool_logo_1000x1000.png"
import CoolLogoMobile from "../../assets/cool_logo.png"

const HomeHero: React.FC = () => {
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
    <section className="home__hero">
      <div className="home__hero--grid">
        <div className="home__hero--grid--cool-img">
          <img
            src={CoolLogoMobile}
            srcSet={`${CoolLogoMobile} 500w, ${CoolLogo} 1000w`}
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
              <Button title="Learn More!" link="/about" type="secondary" />
              <Button
                title="Join Us Now!"
                link="https://members.acmucsd.com"
                type="primary"
              />
            </div>
          </div>
        </div>
        {scrolled ? null : <img className="arrow" alt="" src={Arrow} />}
      </div>
    </section>
  )
}

export default HomeHero
