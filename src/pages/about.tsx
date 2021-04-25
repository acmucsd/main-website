import React, {useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import AboutHero from "../sections/about/About.Hero"
import AboutGetInvolved from "../sections/about/About.GetInvolved"
import AboutMembership from "../sections/about/About.Membership"
import AboutBoard from "../sections/about/About.Board"

const AboutPage: React.FC = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth)
  const isMobile = windowWidth < 814

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero isMobile={isMobile}/>
      <AboutGetInvolved isMobile={isMobile}/>
      {!isMobile && <AboutMembership />}
      <AboutBoard />
    </Layout>
  )
}

export default AboutPage
