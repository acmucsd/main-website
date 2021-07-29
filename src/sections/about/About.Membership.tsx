import React from "react"

import Button from "../../components/button/Button"
import "./styles.less"

const AboutMembership: React.FC = () => {
  return (
    <section className="about__membership">
      <h2>How do I become a member?</h2>
      <p>
        Become a member of ACM at UCSD to celebrate your interests with
        like-minded peers! Just create a free account through the membership
        portal by clicking on the link below. All skill levels and majors are
        welcome.
      </p>
      <a href="https://members.acmucsd.com/register">Sign up now!</a>
    </section>
  )
}

export default AboutMembership
