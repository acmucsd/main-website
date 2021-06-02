import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Size, useWindowSize } from "../utils"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import AboutHero from "../sections/about/About.Hero"
import AboutGetInvolved from "../sections/about/About.GetInvolved"
import AboutMembership from "../sections/about/About.Membership"
import AboutBoard from "../sections/about/About.Board"

const AboutPage: React.FC = () => {
  const size: Size = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(size.width < 814)
  }, [size])
  
  return (
    <Layout>
      <SEO title="About" />
      <AboutHero isMobile={isMobile} />
      <AboutGetInvolved isMobile={isMobile} />
      {!isMobile && <AboutMembership />}
      <AboutBoard isMobile={isMobile} />
    </Layout>
  )
}

export default AboutPage
