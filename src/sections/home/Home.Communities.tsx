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
            ACM consists of 5 orgs that each focus on a specific area of tech.
          </p>
        </div>
        <CommunitiesGrid
          AILink="https://ai.acmucsd.com/"
          CyberLink="https://acmurl.com/cyberdiscord"
          DesignLink="#"
          HackLink="https://acmurl.com/hack-discord"
          InnovateLink="https://acmurl.com/innovate-disc"
        />
      </div>
    </section>
  )
}

export default HomeCommunities
