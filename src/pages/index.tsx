import React from "react"
import Layout from "../components/Layout"

import HomeHero from "../sections/home/Home.Hero"
import HomeCommunities from "../sections/home/Home.Communities"
import HomeJoinTheClub from "../sections/home/Home.JoinTheClub"
import HomeEvents from "../sections/home/Home.Events"
import SEO from "../components/SEO"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="ACM at UCSD"/>
    <HomeHero />
    <HomeJoinTheClub />
    <HomeEvents />
    <HomeCommunities />
  </Layout>
)

export default IndexPage
