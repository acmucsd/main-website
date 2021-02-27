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
    <h1>Home Page</h1>
    <p>This will be the landing page for the new ACM website!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
