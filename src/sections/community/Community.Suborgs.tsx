import React from "react"
import "./styles.less"
import * as Scroll from "react-scroll"
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import AILogo from "../../assets/logos/acm-ai.svg"
import AIDiscord from "../../assets/communities-links/ai-discord.svg"
import AIHome from "../../assets/communities-links/ai-home.svg"

import CyberLogo from "../../assets/logos/acm-cyber.svg"
import CyberDiscord from "../../assets/communities-links/cyber-discord.svg"
import CyberHome from "../../assets/communities-links/cyber-home.svg"
import CyberTwitter from "../../assets/communities-links/cyber-twitter.svg"
import CyberFacebook from "../../assets/communities-links/cyber-facebook.svg"
import CyberYoutube from "../../assets/communities-links/cyber-youtube.svg"
import CyberMail from "../../assets/communities-links/cyber-mail.svg"
import CyberLinkedin from "../../assets/communities-links/cyber-linkedin.svg"

import HackLogo from "../../assets/logos/acm-hack.svg"
import HackDiscord from "../../assets/communities-links/hack-discord.svg"
import HackHome from "../../assets/communities-links/hack-home.svg"

import InnovateLogo from "../../assets/logos/acm-innovate.svg"
import InnovateDiscord from "../../assets/communities-links/innovate-discord.svg"
import InnovateHome from "../../assets/communities-links/innovate-home.svg"
import InnovateYoutube from "../../assets/communities-links/innovate-youtube.svg"

import DesignLogo from "../../assets/logos/acm-design.svg"

const AICommunity = () => {
  return (
    <div className="community__sub-orgs__community-card">
      <div className="color_slide redbg" />

      <div className="community__sub-orgs__community-card__content">
        <img
          src={AILogo}
          alt="ACM AI"
          className="community__sub-orgs__community-card__logo"
        />
        <div>
          <h1 className="red">ACM AI</h1>
          <p>
            Our goals are to help build a community of AI enthusiasts at UCSD
            and connect that community to the broader AI network.
            <br />
            <br />
            We strive to keep AI fun and accessible to all. We want to help you
            navigate your path around the complex world of AI through workshops,
            fun hands on competitions, mentor guided projects, networking events
            and more!
            <br />
            <br />
            Join our discord and signup for an account on our website to get
            access to all the perks and be up to date on AI and the community!
          </p>
          <div className="community-links" id="Cyber">
            <a href="https://acmurl.com/ai-disc">
              <img src={AIDiscord} alt="AI Discord" />
            </a>
            <a href="https://ai.acmucsd.com/">
              <img src={AIHome} alt="AI Home" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
const CyberCommunity = () => {
  return (
    <div className="community__sub-orgs__community-card">
      <div className="color_slide turquoisebg" />

      <div className="community__sub-orgs__community-card__content">
        <img
          src={CyberLogo}
          alt="ACM Cyber"
          className="community__sub-orgs__community-card__logo"
        />
        <div>
          <h1 className="turquoise">ACM Cyber</h1>
          <p>
            ACM Cyber aims to provide member-first opportunities to learn,
            teach, and practice critical cybersecurity skills to help the UCSD
            community thrive.
            <br />
            <br />
            With over 300 members currently registered, we are one of the
            fastest growing organizations on campus. We host hands-on workshops,
            industry panels, competitive CTF training, and mentorship
            opportunities for our members. Our largest event of the year is San
            Diego CTF (Capture the Flag), a 48 hour jeopardy style hacking game.
            Our goals are to help build a community of AI enthusiasts at UCSD
            and connect that community to the broader AI network.
          </p>
          <div className="community-links">
            <a href="https://acmurl.com/cyberdiscord">
              <img src={CyberDiscord} alt="Cyber Discord" />
            </a>
            <a href="https://sdc.tf/">
              <img src={CyberHome} alt="Cyber Home" />
            </a>
            <a href="https://www.facebook.com/cyberucsd">
              <img src={CyberFacebook} alt="Cyber Facebook" />
            </a>
            <a href="https://twitter.com/cyberucsd,">
              <img src={CyberTwitter} alt="Cyber Twitter" />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLpmCTDt8lemWaQ_ZruBe3Dt6ddtVdX-yR">
              <img src={CyberYoutube} alt="Cyber Youtube" />
            </a>
            <a href="https://www.linkedin.com/company/cyber-ucsd/">
              <img src={CyberLinkedin} alt="Cyber LinkedIn" />
            </a>
            <a href="https://acmurl.com/joincyber" id="Hack">
              <img src={CyberMail} alt="Cyber Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
const HackCommunity = () => {
  return (
    <div className="community__sub-orgs__community-card" id="Hack">
      <div className="color_slide yellowbg" />

      <div className="community__sub-orgs__community-card__content">
        <img
          src={HackLogo}
          alt="ACM Hack"
          className="community__sub-orgs__community-card__logo"
        />
        <div>
          <h1 className="yellow">ACM Hack</h1>
          <p>
            We focus on learning more about software engineering and exploring
            what is possible through code.
            <br />
            <br />
            We frequently host workshops to empower students to create amazing
            projects, as well as events to help students learn about software
            engineering and finding their path.
            <br />
            <br />
            Our events are for people of all skill levels, so whether you're a
            first-time coder or a skilled programmer, we'd be happy to have you
            join the ACM Hack community! ACM Cyber aims to provide member-first
            opportunities to learn, teach, and practice critical cybersecurity
            skills to help the UCSD community thrive.
          </p>
          <div className="community-links" id="Innovate">
            <a href="http://acmurl.com/hack-disc">
              <img src={HackDiscord} alt="Hack Discord" />
            </a>
            <a href="https://hack.acmucsd.com/">
              <img src={HackHome} alt="Hack Home" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const InnovateCommunity = () => {
  return (
    <div className="community__sub-orgs__community-card" id="Innovate">
      <div className="color_slide purplebg" />

      <div className="community__sub-orgs__community-card__content">
        <img
          src={InnovateLogo}
          alt="ACM Innovate"
          className="community__sub-orgs__community-card__logo"
        />
        <div>
          <h1 className="purple">ACM Innovate</h1>
          <p>
            We create and foster an entrepreneurial spirit with regard to both
            new nonprofit and for-profit companies.
            <br />
            <br />
            Our mission is to increase interest and accessibility in startups
            and bring the innovation spirit and mentality to members’ careers.
            <br />
            <br />
            We frequently host activities: guest speaker talks, workshops, and
            side projects. We have a lot of exciting stuff planned for the
            future!
            <br />
            <br />
            All skill levels welcome!
          </p>
          <div className="community-links" id="Design">
            <a href="https://acmurl.com/innovate-discord">
              <img src={InnovateDiscord} alt="Innovate Discord" />
            </a>
            <a href="https://innovate.acmucsd.com/">
              <img src={InnovateHome} alt="Innovate Home" />
            </a>
            <a href="https://acmurl.com/innovate-youtube">
              <img src={InnovateYoutube} alt="Innovate Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const DesignCommunity = () => {
  return (
    <div className="community__sub-orgs__community-card">
      <div className="color_slide pinkbg" />

      <div className="community__sub-orgs__community-card__content">
        <img
          src={DesignLogo}
          alt="ACM Design"
          className="community__sub-orgs__community-card__logo"
        />
        <div>
          <h1 className="pink">ACM Design</h1>
          <p>
            We explore the intersection between computing and design. We want to
            demonstrate that design can be accessible and highly valuable to
            students in a wide range of disciplines.
            <br />
            <br />
            Members learn and apply design skills through working on projects in
            a supportive, collaborative, and open environment.
            <br />
            <br />
            We will officially launch ACM Design in Fall 2021. We will be
            running seminars, workshops, designathons, and our collaborative
            studio called Co|Lab. Keep an eye out for our workshops and
            opportunities to get involved.
            <br />
            <br />
          </p>
          <div className="community-links"></div>
        </div>
      </div>
    </div>
  )
}
const CommunitySubOrgs: React.FC = () => {
  return (
    <section className="community__sub-orgs">
      <div className="spacer80px" id="AI"></div>
      <AICommunity />
      <CyberCommunity />
      <HackCommunity />
      <InnovateCommunity />
      <DesignCommunity />
    </section>
  )
}

export default CommunitySubOrgs
