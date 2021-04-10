import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import CommunityHero from "../sections/community/Community.Hero"
import CommunitySuborgs from "../sections/community/Community.Suborgs"

const CommunitiesPage: React.FC = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth)
  const isMobile = windowWidth < 812

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  return (
    <Layout>
      <SEO title="Community" />
      <CommunityHero isMobile={isMobile}/>
      <CommunitySuborgs isMobile={isMobile}/>
    </Layout>
  )
}

export default CommunitiesPage
