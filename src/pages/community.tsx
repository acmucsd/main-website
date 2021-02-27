import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import CommunityHero from "../sections/community/Community.Hero"
import CommunitySuborgs from "../sections/community/Community.Suborgs"

const CommunityPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CommunityPage
