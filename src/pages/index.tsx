import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HomeHero from "../sections/home/Home.Hero"
import HomeCommunities from "../sections/home/Home.Communities"
import HomeJoinTheClub from "../sections/home/Home.JoinTheClub"
import HomeEvents from "../sections/home/Home.Events"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <HomeJoinTheClub />
    <HomeCommunities />
    <HomeEvents />
  </Layout>
)

export default IndexPage
