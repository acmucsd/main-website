import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import HomeHero from "../sections/home/Home.Hero"
import HomeCommunities from "../sections/home/Home.Communities"
import HomeJoinTheClub from "../sections/home/Home.JoinTheClub"
import HomeEvents from "../sections/home/Home.Events"

const IndexPage: React.FC = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>ACM at UCSD</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <HomeHero />
    <HomeJoinTheClub />
    <HomeEvents />
    <HomeCommunities />
  </Layout>
)

export default IndexPage
