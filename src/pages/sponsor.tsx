import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import SponsorshipLogo from "../sections/sponsorship/Sponsorship.Logos"
import SponsorshipInfo from "../sections/sponsorship/Sponsorship.Info"

const SponsorshipPage: React.FC = () => (
  <Layout>
    <SEO title="Sponsor" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SponsorshipPage
