import React from "react"
import "./styles.less"
import CommunitiesGrid from "../../components/CommunitiesGrid"

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <section className="community__hero">
      {!isMobile ?
        (<>
          <h1>Communities</h1>
          <p>
            ACM @ UCSD is one large community, but it is made up of several smaller
            communities focused on specific areas of technology.
          </p>
          <div className="community__hero__communities">
            <CommunitiesGrid />
          </div>
        </>):
        ""
      }
    </section>
  )
}

export default CommunityHero
