import { useState } from "react";
import Image from "next/image";
import AIDiscord from "public/assets/communities-links/ai-discord.svg";
import AIHome from "public/assets/communities-links/ai-home.svg";
import CyberDiscord from "public/assets/communities-links/cyber-discord.svg";
import CyberFacebook from "public/assets/communities-links/cyber-facebook.svg";
import CyberHome from "public/assets/communities-links/cyber-home.svg";
import CyberLinkedin from "public/assets/communities-links/cyber-linkedin.svg";
import CyberMail from "public/assets/communities-links/cyber-mail.svg";
import CyberTwitter from "public/assets/communities-links/cyber-twitter.svg";
import CyberYoutube from "public/assets/communities-links/cyber-youtube.svg";
import HackDiscord from "public/assets/communities-links/hack-discord.svg";
import HackHome from "public/assets/communities-links/hack-home.svg";
import InnovateDiscord from "public/assets/communities-links/innovate-discord.svg";
import InnovateHome from "public/assets/communities-links/innovate-home.svg";
import InnovateYoutube from "public/assets/communities-links/innovate-youtube.svg";
import AILogoSelected from "public/assets/communities-navigation/ai-selected.svg";
import CyberLogoSelected from "public/assets/communities-navigation/cyber-selected.svg";
import HackLogoSelected from "public/assets/communities-navigation/hack-selected.svg";
import InnovateLogoSelected from "public/assets/communities-navigation/innovate-selected.svg";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import InnovateLogo from "public/assets/logos/acm-innovate.svg";

const CommunityComponent: React.FC<{
  org: string;
  color: string;
  isMobile: boolean;
  website: string;
  logo: string;
  links: { src: string; logo: string; alt: string }[];
  description: any;
}> = ({ isMobile, color, org, website, logo, links, description }) => {
  return (
    <div className="community__sub-orgs__community-card" id={org}>
      <div className={`color_slide ${color}bg`} />
      <div className="community__sub-orgs__community-card__content">
        {isMobile ? null : (
          <a href={website}>
            <img
              src={logo}
              alt={`ACM ${org}`}
              className="community__sub-orgs__community-card__logo"
            />
          </a>
        )}
        <div>
          <div className="community__sub-orgs__community-card__header">
            {!isMobile ? null : <img src={logo} alt={`ACM ${org}`} />}
            <h1 className={color}>ACM {org}</h1>
          </div>
          {description}
          <div className="community-links">
            {links.map((link, index) => (
              <a key={`${link}-${index}`} href={link.src}>
                <img src={link.logo} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AICommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="AI"
    color="red"
    website="https://ai.acmucsd.com/"
    logo={AILogo.src}
    isMobile={isMobile}
    links={[
      {
        src: "https://acmurl.com/ai-disc",
        logo: AIDiscord.src,
        alt: "AI Discord",
      },
      {
        src: "https://ai.acmucsd.com/",
        logo: AIHome.src,
        alt: "AI Home",
      },
    ]}
    description={
      <p>
        Our goals are to help build a community of AI enthusiasts at UCSD and
        connect that community to the broader AI network.
        <br />
        <br />
        We strive to keep AI fun and accessible to all. We want to help you
        navigate your path around the complex world of AI through workshops, fun
        hands on competitions, mentor guided projects, networking events and
        more!
        <br />
        <br />
        Join our discord and signup for an account on our website to get access
        to all the perks and be up to date on AI and the community!
      </p>
    }
  />
);

const CyberCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Cyber"
    color="turquoise"
    isMobile={isMobile}
    website="https://sdc.tf/"
    logo={CyberLogo.src}
    links={[
      {
        src: "https://acmurl.com/cyberdiscord",
        logo: CyberDiscord.src,
        alt: "Cyber Discord",
      },
      {
        src: "https://sdc.tf/",
        logo: CyberHome.src,
        alt: "Cyber Home",
      },
      {
        src: "https://www.facebook.com/cyberucsd",
        logo: CyberFacebook.src,
        alt: "Cyber Facebook",
      },
      {
        src: "https://twitter.com/cyberucsd",
        logo: CyberTwitter.src,
        alt: "Cyber Twitter",
      },
      {
        src: "https://www.youtube.com/playlist?list=PLpmCTDt8lemWaQ_ZruBe3Dt6ddtVdX-yR",
        logo: CyberYoutube.src,
        alt: "Cyber Youtube",
      },
      {
        src: "https://www.linkedin.com/company/cyber-ucsd/",
        logo: CyberLinkedin.src,
        alt: "Cyber LinkedIn",
      },
      {
        src: "https://acmurl.com/joincyber",
        logo: CyberMail.src,
        alt: "Cyber Mail",
      },
    ]}
    description={
      <p>
        ACM Chapter Cyber aims to provide member-first opportunities to learn, teach, and practice
        critical cybersecurity skills to help the UCSD community thrive.
        <br />
        <br />
        With over 300 members currently registered, we are one of the fastest
        growing organizations on campus. We host hands-on workshops, industry
        panels, competitive CTF training, and mentorship opportunities for our
        members. Our largest event of the year is San Diego CTF (Capture the
        Flag), a 48 hour jeopardy style hacking game.
      </p>
    }
  />
);

const HackCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org={"Hack"}
    color={"yellow"}
    isMobile={isMobile}
    website={"https://hack.acmucsd.com/"}
    logo={HackLogo.src}
    links={[
      {
        src: "http://acmurl.com/hack-disc",
        logo: HackDiscord.src,
        alt: "Hack Discord",
      },
      {
        src: "https://hack.acmucsd.com/",
        logo: HackHome.src,
        alt: "Hack Home",
      },
    ]}
    description={
      <p>
        We focus on learning more about software engineering and exploring what
        is possible through code.
        <br />
        <br />
        We frequently host workshops to empower students to create amazing
        projects, as well as events to help students learn about software
        engineering and finding their path.
        <br />
        <br />
        Our events are for people of all skill levels, so whether you&apos;re a first-time coder or
        a skilled programmer, we&apos;d be happy to have you join the ACM Chapter Hack community!
      </p>
    }
  />
);
const InnovateCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org={"Innovate"}
    color={"purple"}
    isMobile={isMobile}
    website={"https://innovate.acmucsd.com/"}
    logo={InnovateLogo.src}
    links={[
      {
        src: "https://acmurl.com/innovate-discord",
        logo: InnovateDiscord.src,
        alt: "Innovate Discord",
      },
      {
        src: "https://innovate.acmucsd.com/",
        logo: InnovateHome.src,
        alt: "Innovate Home",
      },
      {
        src: "https://acmurl.com/innovate-youtube",
        logo: InnovateYoutube.src,
        alt: "Innovate Youtube",
      },
    ]}
    description={
      <p>
        We create and foster an entrepreneurial spirit with regard to both new
        nonprofit and for-profit companies.
        <br />
        <br />
        Our mission is to increase interest and accessibility in startups and
        bring the innovation spirit and mentality to members’ careers.
        <br />
        <br />
        We frequently host activities: guest speaker talks, workshops, and side
        projects. We have a lot of exciting stuff planned for the future!
        <br />
        <br />
        All skill levels welcome!
      </p>
    }
  />
);

const CommunitySubOrgs: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [selected, setSelected] = useState("general");

  const communityComponents = {
    ai: <AICommunity isMobile={isMobile} />,
    cyber: <CyberCommunity isMobile={isMobile} />,
    hack: <HackCommunity isMobile={isMobile} />,
    innovate: <InnovateCommunity isMobile={isMobile} />,
    general: (
      <div className="community__sub-orgs--mobile__description">
        <p>
          ACM Chapter at UCSD is one large community, but it is made up of several smaller
          communities focused on specific areas of technology.
        </p>
        <p>Learn more about each community</p>
      </div>
    ),
  };

  return (
    <>
      {isMobile ? (
        <section className="community__sub-orgs--mobile">
          <h1
            className="community__sub-orgs--mobile__header"
            onClick={() => setSelected("general")}
          >
            Communities
          </h1>
          <div className="community__sub-orgs--mobile__navigation">
            <button onClick={() => setSelected("ai")}>
              <img
                src={selected === "ai" ? AILogoSelected.src : AILogo.src}
                alt="AI Logo"
              />
            </button>
            <button onClick={() => setSelected("cyber")}>
              <img
                src={
                  selected === "cyber" ? CyberLogoSelected.src : CyberLogo.src
                }
                alt="Cyber Logo"
              />
            </button>
            <button onClick={() => setSelected("hack")}>
              <img
                src={selected === "hack" ? HackLogoSelected.src : HackLogo.src}
                alt="Hack Logo"
              />
            </button>
            <button onClick={() => setSelected("innovate")}>
              <img
                src={
                  selected === "innovate"
                    ? InnovateLogoSelected.src
                    : InnovateLogo.src
                }
                alt="Innovate Logo"
              />
            </button>
          </div>
          {communityComponents[selected]}
        </section>
      ) : (
        <section className="community__sub-orgs">
          <div className="spacer80px"></div>
          <AICommunity isMobile={isMobile} />
          <CyberCommunity isMobile={isMobile} />
          <HackCommunity isMobile={isMobile} />
          <InnovateCommunity isMobile={isMobile} />
        </section>
      )}
    </>
  );
};

export default CommunitySubOrgs;
