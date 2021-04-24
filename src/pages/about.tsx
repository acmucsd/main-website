import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import AboutHero from "../sections/about/About.Hero"
import AboutGetInvolved from "../sections/about/About.GetInvolved"
import AboutMembership from "../sections/about/About.Membership"
import AboutBoard from "../sections/about/About.Board"

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <AboutHero />
    <AboutGetInvolved />
    <AboutMembership />
    <AboutBoard />
  </Layout>
)

export default AboutPage
