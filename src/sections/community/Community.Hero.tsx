import React, { useEffect } from "react"
import "./styles.less"

import Arrow from "../../assets/arrow.svg"
import CommunitiesGrid from "../../components/CommunitiesGrid"

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
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
    <section className="community__hero">
      {!isMobile ? (
        <>
          <h1>Communities</h1>
          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          <div className="community__hero__communities">
            <CommunitiesGrid />
          </div>
          {scrolled ? null : <img className="arrow" alt="" src={Arrow} />}
        </>
      ) : (
        ""
      )}
    </section>
  )
}

export default CommunityHero
