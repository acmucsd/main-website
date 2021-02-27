import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HomeHero from "../sections/home/Home.Hero"
import HomeCommunities from "../sections/home/Home.Communities"
import HomeGetInvolved from "../sections/home/Home.GetInvolved"
import HomeEvents from "../sections/home/Home.Events"


const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
    <HomeCommunities />
    <HomeGetInvolved />
    <HomeEvents />
  </Layout>
)

export default IndexPage
