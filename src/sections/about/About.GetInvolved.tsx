import React, { useState } from "react"
import "./styles.less"

import CommunitiesGrid from "../../components/CommunitiesGrid"

import AboutSocial from "../../assets/about-images/about-social.png"
import AboutCommunities from "../../assets/about-images/about-communities.png"
import AboutBitByte from "../../assets/about-images/about-bitbyte.png"
import AboutProjects from "../../assets/about-images/about-projects.png"

import AILogo from "../../assets/logos/acm-ai.svg"
import CyberLogo from "../../assets/logos/acm-cyber.svg"
import DesignLogo from "../../assets/logos/acm-design.svg"
import HackLogo from "../../assets/logos/acm-hack.svg"
import InnovateLogo from "../../assets/logos/acm-innovate.svg"

import DiscordLogo from "../../assets/discord-dark.svg"
import FacebookLogo from "../../assets/facebook-dark.svg"
import LinkedinLogo from "../../assets/linkedin-dark.svg"

const renderMobileCommunityGrid = () => (
  <div className="about__get-involved__section__communities--mobile">
    <div>
      <a href="/communities#Hack">
        <img src={HackLogo} alt="ACM Hack Logo" />
      </a>
      <a href="/communities#Innovate">
        <img src={InnovateLogo} alt="ACM Innovate Logo" />
      </a>
    </div>
    <div>
      <a href="/communities#AI">
        <img src={AILogo} alt="ACM AI Logo" />
      </a>
      <a href="/communities#Cyber">
        <img src={CyberLogo} alt="ACM Cyber Logo" />
      </a>
      <a href="/communities#Design">
        <img src={DesignLogo} alt="ACM Design Logo" />
      </a>
    </div>
  </div>
)

const AboutGetInvolved: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [email, setEmail] = useState("")
  return (
    <section className="about__get-involved">
      <h2>How can I get involved?</h2>
      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutSocial} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="purple">Connect with us on Social Media</h3>
          {isMobile && <img src={AboutSocial} alt="" />}
          {!isMobile && (
            <p>
              To keep up with what's happening, we recommend joining our Discord
              server and following us on Facebook.{" "}
            </p>
          )}
          <div className="about__get-involved__section__description__links">
            <a href="https://acmurl.com/discord">
              <img src={DiscordLogo} alt="Discord Logo" />
            </a>
            <a href="https://www.facebook.com/acmucsd">
              <img src={FacebookLogo} alt="Facebook Logo" />
            </a>
          </div>
          <div className="about__get-involved__section__description__newsletter">
            <label>Subscribe to our Newsletter!</label>
            <a href="https://acmurl.com/newsletter" target="_blank">
              Subscribe!
            </a>
          </div>
        </div>
      </div>
      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutCommunities} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="orange">Join our Communities</h3>
          {isMobile && <img src={AboutCommunities} alt="" />}
          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          {!isMobile && <CommunitiesGrid colLayout />}
        </div>
        {isMobile && renderMobileCommunityGrid()}
      </div>

      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutBitByte} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="blue">Become a mentor/mentee!</h3>
          {isMobile && <img src={AboutBitByte} alt="" />}
          <p>
            Join ACM’s Bit-Byte program that pairs students to make lifelong
            friendships! Our upperclassmen bigs (bytes) help their littles
            (bits) grow in their academic, social, and professional lives.
          </p>
          <br />
          <a
            className="about__get-involved__section__description__button--blue"
            href="https://acmurl.com/bit-byte"
          >
            Learn more!
          </a>
        </div>
      </div>
      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutProjects} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="pink">Participate in ACM Projects!</h3>
          {isMobile && <img src={AboutProjects} alt="" />}
          <p>
            Sign up to join a team in our quarter-long projects. Grow your
            skills in coding, design, or project management.
          </p>
          <br />
          <a
            className="about__get-involved__section__description__button--pink"
            href="https://github.com/acmucsd-projects"
          >
            See Projects!
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutGetInvolved
