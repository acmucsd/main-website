import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import AboutHero from "../sections/about/About.Hero"
import AboutGetInvolved from "../sections/about/About.Communities"
import AboutCommunities from "../sections/about/About.GetInvolved"
import AboutMembership from "../sections/about/About.Membership"
import AboutBoard from "../sections/about/About.Board"

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
