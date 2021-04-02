import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import SponsorshipLogo from "../sections/sponsorship/Sponsorship.Logos"
import SponsorshipInfo from "../sections/sponsorship/Sponsorship.Info"
import SponsorshipBenefits from "../sections/sponsorship/Sponsorship.Benefits"

const SponsorshipPage: React.FC = () => (
  <Layout>
    <SEO title="Sponsors" />
    <SponsorshipInfo />
    <SponsorshipLogo />
    <SponsorshipBenefits />
  </Layout>
)

export default SponsorshipPage
