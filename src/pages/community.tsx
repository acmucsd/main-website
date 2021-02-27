import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import CommunityHero from "../sections/community/Community.Hero"
import CommunitySuborgs from "../sections/community/Community.Suborgs"

const CommunityPage: React.FC = () => (
  <Layout>
    <SEO title="Community" />
    <CommunityHero />
    <CommunitySuborgs />
  </Layout>
)

export default CommunityPage
