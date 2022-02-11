import { useState, useEffect } from "react"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import Button from "src/components/Button"
import Image from 'next/image'

import Arrow from "public/assets/arrow.svg"
import CoolLogo from "public/assets/cool_logo_1000x1000.png"
import CoolLogoMobile from "public/assets/cool_logo.png"

const HomeHero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

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
  }, [scrolled])

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
  }

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
                title="Join Us Now!"
                link="https://members.acmucsd.com"
                type="primary"
              />
            </div>
          </div>
        </div>
        {!scrolled && 
          <img className="arrow" alt="" onClick={scrollDown} src='assets/arrow.svg' />
        }
      </div>
    </section>
  )
}

export default HomeHero
