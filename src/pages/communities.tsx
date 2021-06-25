import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Size, useWindowSize } from "../utils"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import CommunityHero from "../sections/community/Community.Hero"
import CommunitySuborgs from "../sections/community/Community.Suborgs"

const CommunitiesPage: React.FC = () => {
  const size: Size = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(size.width < 812)
  }, [size])

  return (
    <Layout>
      <SEO title="Communities" />
      <CommunityHero isMobile={isMobile} />
      <CommunitySuborgs isMobile={isMobile} />
    </Layout>
  )
}

export default CommunitiesPage
