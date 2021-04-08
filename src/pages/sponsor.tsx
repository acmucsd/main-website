import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import SponsorshipHero from "../sections/sponsorship/Sponsorship.Hero"
import SponsorshipLogos from "../sections/sponsorship/Sponsorship.Logos"
import SponsorshipBenefits from "../sections/sponsorship/Sponsorship.Benefits"

const SponsorshipPage: React.FC = () => (
  <Layout>
    <SEO title="Sponsors" />
    <SponsorshipHero />
    <SponsorshipLogos />
    <SponsorshipBenefits />
  </Layout>
)

export default SponsorshipPage
