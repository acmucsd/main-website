import React from "react"
import CommunitiesGrid from "../../components/CommunitiesGrid"
import "./styles.less"

const HomeCommunities: React.FC = () => {
  return (
    <section className="home__communities">
      <div className="home__communities__grid">
        <div className="home__communities__grid__header">
          <h1>Communities</h1>
          <p>
            ACM at UCSD consists of 5 orgs that each focus on a specific area of
            tech.
          </p>
        </div>
        <CommunitiesGrid verticalLayout={false} />
      </div>
    </section>
  )
}

export default HomeCommunities
