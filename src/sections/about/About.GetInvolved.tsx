import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutBitByte from "public/assets/about-images/about-bitbyte.png";
import AboutCommunities from "public/assets/about-images/about-communities.png";
import AboutProjects from "public/assets/about-images/about-projects.png";
import AboutSocial from "public/assets/about-images/about-social.png";
import DiscordLogo from "public/assets/discord-dark.svg";
import FacebookLogo from "public/assets/facebook-dark.svg";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import InnovateLogo from "public/assets/logos/acm-innovate.svg";
import CommunitiesGrid from "src/components/CommunitiesGrid";

const MobileCommunityGrid = () => (
  <div className="about__get-involved__section__communities--mobile">
    <div>
      <Link href="/communities#Hack">
        <a>
          <img src={HackLogo.src} alt="ACM Hack Logo" />
        </a>
      </Link>
      <Link href="/communities#Innovate">
        <a>
          <img src={InnovateLogo.src} alt="ACM Innovate Logo" />
        </a>
      </Link>
    </div>
    <div>
      <Link href="/communities#AI">
        <a>
          <img src={AILogo.src} alt="ACM AI Logo" />
        </a>
      </Link>
      <Link href="/communities#Cyber">
        <a>
          <img src={CyberLogo.src} alt="ACM Cyber Logo" />
        </a>
      </Link>
    </div>
  </div>
);

const AboutGetInvolved: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [email, setEmail] = useState("");
  return (
    <section className="about__get-involved">
      <h2>How can I get involved?</h2>
      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutSocial.src} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="purple">Connect with us on Social Media</h3>
          {isMobile && <img src={AboutSocial.src} alt="" />}
          {!isMobile && (
            <p>
              To keep up with what&apos;s happening, we recommend joining our
              Discord server and following us on Facebook.
            </p>
          )}
          <div className="about__get-involved__section__description__links">
            <a href="https://acmurl.com/discord">
              <img src={DiscordLogo.src} alt="Discord Logo" />
            </a>
            <a href="https://www.facebook.com/acmucsd">
              <img src={FacebookLogo.src} alt="Facebook Logo" />
            </a>
          </div>
          <div className="about__get-involved__section__description__newsletter">
            <label>Subscribe to our Newsletter!</label>
            <a
              href="https://acmurl.com/newsletter"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe!
            </a>
          </div>
        </div>
      </div>
      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutCommunities.src} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="orange">Join our Communities</h3>
          {isMobile && <img src={AboutCommunities.src} alt="" />}
          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          {!isMobile && <CommunitiesGrid colLayout />}
        </div>
        {isMobile && <CommunitiesGrid />}
      </div>

      <div className="about__get-involved__section">
        {!isMobile && <img src={AboutBitByte.src} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="blue">Become a mentor/mentee!</h3>
          {isMobile && <img src={AboutBitByte.src} alt="" />}
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
        {!isMobile && <img src={AboutProjects.src} alt="" />}
        <div className="about__get-involved__section__description">
          <h3 className="pink">Participate in ACM Projects!</h3>
          {isMobile && <img src={AboutProjects.src} alt="" />}
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
  );
};

export default AboutGetInvolved;
