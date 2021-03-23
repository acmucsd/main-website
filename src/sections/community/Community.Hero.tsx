import React from "react"
import "./styles.less"

const CommunityHero: React.FC = () => {
  return (
    <section className="community__hero">
      <h1>Communities</h1>
      <p>
        ACM @ UCSD is one large community, but it is made up of several smaller
        communities focused on specific areas of technology.
      </p>
      <div className="community__hero__communities">
        insert communities grid
      </div>
    </section>
  )
}

export default CommunityHero
