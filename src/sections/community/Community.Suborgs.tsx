import { useState } from "react";
import AIDiscord from "public/assets/communities-links/ai-discord.svg";
import AIHome from "public/assets/communities-links/ai-home.svg";
import CyberDiscord from "public/assets/communities-links/cyber-discord.svg";
import CyberHome from "public/assets/communities-links/cyber-home.svg";
import HackDiscord from "public/assets/communities-links/hack-discord.svg";
import HackHome from "public/assets/communities-links/hack-home.svg";
import AILogoSelected from "public/assets/communities-navigation/ai-selected.svg";
import CyberLogoSelected from "public/assets/communities-navigation/cyber-selected.svg";
import HackLogoSelected from "public/assets/communities-navigation/hack-selected.svg";
import DesignLogoSelected from "public/assets/communities-navigation/design-selected.svg";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import DesignLogo from "public/assets/logos/acm-design.svg";
import BitByteLogo from "public/assets/logos/bitbyte.svg";
import HackathonLogo from "public/assets/logos/hackathon.svg";
import OutreachLogo from "public/assets/logos/reach.svg";
import ProjectsLogo from "public/assets/logos/projects.svg";
import SpaceLogo from "public/assets/logos/space.svg";
import Link from "next/link";

import CatLong from "public/assets/communities-images/cat-long.svg";
import CatSquare from "public/assets/communities-images/cat-square.svg";

const CommunityImages: React.FC<{
  // links: { src: string; logo: string; alt: string }[];
}> = ({  }) => {
  return(
    <div className="community__image-grid">
      <img
        src={CatLong.src}
        alt={`Half Cat 1`}
        className="pic1"
          />
      
      <img
        src={CatLong.src}
        alt={`Half Cat 2`}
        className="pic2"
          />

      <img
        src={CatSquare.src}
        alt={`Square Cat`}
        className="pic3"
          />

      <img
        src={CatLong.src}
        alt={`Super Long Cat`}
        className="pic4"
          />
    </div>
  );
};

const CommunitiesTitle: React.FC<{
  open?: boolean;
  org: string;
  color: string;
  logo: string;
  website: string;
  glowClassName: string;
  isMobile: boolean;
  setSelected: (org: string) => void;
}> = ({
  open,
  logo,
  website,
  org,
  color,
  isMobile,
  glowClassName,
  setSelected,
}) => {

  const getFullName = (org: string) => {
    switch (org) {
      case "AI":
        return "Artificial Intelligence";
      case "Cyber":
        return "Cyber Security";
      case "Hack":
        return "Software Engineering";
      case "Design":
        return "Design";
      case "Reach":
        return "Outreach";
      case "Space":
        return "Space Career Fair";
      default:
        return org;
    }
  }

  const [hover, setHover] = useState(false);

  const filterDropShadow = `
        drop-shadow(0px 0px 1px #FF0000) 
        drop-shadow(0px 0px 1px #FF7F00)  
        drop-shadow(0px 0px 1px #FFFF00)  
        drop-shadow(0px 0px 1px #00FF00)  
        drop-shadow(0px 0px 1px #0000FF)  
        drop-shadow(0px 0px 1px #2E2B5F)  
        drop-shadow(0px 0px 1px #8B00FF) 
        `; 

  return (
    <>
      <div className="community__sub-orgs__logo-card" data-open={open} >
          <img
            src={logo}
            alt={`ACM ${org}`}
            className={`community__sub-orgs__logo-card__logo ${((open || hover)) ? 'glow-on-hover' : ''}`}
            onClick={() => setSelected(org)}
            style={{'--shadow-color': color, filter: (open || hover) ? ` ${color=='' ? `` : `drop-shadow(0 0 1rem ${color})`} ` : 'none'} as React.CSSProperties}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            data-glow={open || hover}
          />
        
        {open ? ( 
          <div className="community__sub-orgs__logo-card__content">
            <h1 className={color}>ACM {org}</h1>
            <h2 className="fullName">{getFullName(org)}</h2>
          </div>
        ) : null}  
      </div>
    </>
  );
};

const CommunityComponent: React.FC<{
  org: string;
  color: string;
  isMobile: boolean;
  website: string;
  logo: string;
  links: { src: string; logo: string; alt: string }[];
  description: any; // Input is HTML
}> = ({ isMobile, color, org, website, logo, links, description }) => {
  return (
    // <>
    //   <CommunitiesTitle open={true} logo={logo} website={website} org={org} color={color} description={description}/>
    // </>
    
    <div className="community__sub-orgs__community-card" id={org}>
      <div className={`color_slide ${color}bg`} />
      <div className="community__sub-orgs__community-card__content">
        {isMobile ? null : (
          <CommunityImages />
          /*<a href={website}>
            <img
              src={logo}
              alt={`ACM ${org}`}
              className="community__sub-orgs__community-card__logo"
            />
          </a>*/
        )}
        <div className="community__sub-orgs__community-card__content__desc-holder">
          <div className="community__sub-orgs__community-card__header">
            {/*{!isMobile ? null :  <img src={logo} alt={`ACM ${org}`} />}*/}
            <h1 className={color}>ACM {org}</h1>
            <div className="community-links">
              {links.map((link, index) => (
                <a key={`${link}-${index}`} href={link.src}>
                  <img src={link.logo} alt={link.alt} />
                </a>
              ))}
            </div>
          </div>
          {description}
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

const AITitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string }> = ({ isMobile, open, setSelected, glowClassName }) => (
  <CommunitiesTitle
    org="AI"
    color="red"
    website="https://ai.acmucsd.com/"
    logo={AILogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName=""
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
    ]}
    description={
      <p>
        ACM Cyber aims to provide member-first opportunities to learn, teach,
        and practice critical cybersecurity skills to help the UCSD community
        thrive.
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

const CyberTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string}> = ({ isMobile, open, setSelected, glowClassName }) => (
  <CommunitiesTitle
    org="Cyber"
    color="turquoise"
    isMobile={isMobile}
    website="https://sdc.tf/"
    logo={CyberLogo.src}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const HackCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Hack"
    color="orange"
    website="https://hack.acmucsd.com/"
    logo={HackLogo.src}
    isMobile={isMobile}
    links={[
      {
        src: "https://acmurl.com/hack-discord",
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
        ACM Hack is a community centered around software engineering and exploring what is possible through code. 
        <br />
        <br />
        Our name comes from Hackathons – events where software engineers write code to produce innovative projects. 
        Our goal is to enable and prepare a community of software engineers to build new things and excel in industry. 
        We do this through technical workshops on industry-relevant tools, bootcamps, and projects.
        <br />
        <br />
        Join our Discord to engage with our community, and check out our website to learn more about us!
      </p>
    }
  />
);

const HackTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string}> = ({ isMobile, open, setSelected, glowClassName}) => (
  <CommunitiesTitle
    org="Hack"
    color="orange"
    website="https://hack.acmucsd.com/"
    logo={HackLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const DesignCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Design"
    color="pink"
    website="https://acmucsd.com/"
    logo={DesignLogo.src}
    isMobile={isMobile}
    links={[]}
    description={
      <p>
        ACM Design centers around UI/UX design and exploring what is possible through all parts of design like research, graphic, and product.
        <br />
        <br />
        We uplift new designers and curious developers to learn how to think like a designer. As a growing community, we host events to teach designers to go from mapping out ideas to building innovative prototypes. We strive to allow designers to have better conversations with developers while making developers more conscious of design methods.
      </p>
    }
  />
);

const DesignTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string,}> = ({ isMobile, open, setSelected, glowClassName}) => (
  <CommunitiesTitle
    org="Design"
    color="pink"
    website="https://acmucsd.com/"
    logo={DesignLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const BitByteTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string}> = ({ isMobile, open, setSelected, glowClassName }) => (
  <CommunitiesTitle
    org="Bit Byte"
    color=""
    website="https://docs.google.com/presentation/d/1yNQmK_w2JQqOeA3MtSwN2_PQT5Q73VCcnGuW0NwzrjM/edit#slide=id.ga0ada6e7b3_0_50"
    logo={BitByteLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const BitByteDescription: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Bit Byte"
    color=""
    website="https://docs.google.com/presentation/d/1yNQmK_w2JQqOeA3MtSwN2_PQT5Q73VCcnGuW0NwzrjM/edit#slide=id.ga0ada6e7b3_0_50"
    logo={BitByteLogo.src}
    isMobile={isMobile}
    links={[]}
    description={
      <p>
        Join ACM’s Bit-Byte program that pairs students to make lifelong friendships! 
        Our upperclassmen bigs (bytes) help their littles (bits) grow in their academic, 
        social, and professional lives.
      </p>
    }
  />
);

const OutreachTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string}> = ({ isMobile, open, setSelected, glowClassName }) => (
  <CommunitiesTitle
    org="Reach"
    color=""
    website="https://outreach-website.vercel.app/"
    logo={OutreachLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const OutreachDescription: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Reach"
    color=""
    website="https://outreach-website.vercel.app/"
    logo={OutreachLogo.src}
    isMobile={isMobile}
    links={[]}
    description={
      <p>
        Welcome to ACM Outreach at UCSD, where our mission is to ignite a passion for computing 
        and STEM among K-12 students, with a special focus on those who are underrepresented 
        in the computing community. Our goal is to empower students to explore the exciting 
        world of computing by nurturing their curiosity and enthusiasm for technology. 
        Join us in inspiring the next generation of innovators and problem solvers!
      </p>
    }
  />
);

const ProjectsTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string,}> = ({ isMobile, open, setSelected, glowClassName }) => (
  <CommunitiesTitle
    org="Projects"
    color=""
    website="https://projects.acmucsd.com/"
    logo={ProjectsLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const ProjectsDescription: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Projects"
    color=""
    website="https://projects.acmucsd.com/"
    logo={ProjectsLogo.src}
    isMobile={isMobile}
    links={[]}
    description={
      <p>
        Sign up to join a team in our quarter-long projects. 
        Grow your skills in coding, design, or project management.
      </p>
    }
  />
);

const SpaceTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; glowClassName: string,}> = ({ isMobile, open, setSelected, glowClassName}) => (
  <CommunitiesTitle
    org="Space"
    color=""
    website="https://space.acmucsd.com/"
    logo={SpaceLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    glowClassName={glowClassName}
  />
);

const SpaceDescription: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <CommunityComponent
    org="Space"
    color=""
    website="https://space.acmucsd.com/"
    logo={ProjectsLogo.src}
    isMobile={isMobile}
    links={[]}
    description={
      <p>
        Through SPACE, students and recruiters can connect and interact with 
        each other regarding professional opportunities such as internships, 
        full or part-time positions, and student programs.
      </p>
    }
  />
);

const CommunitySubOrgs: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [selected, setSelected] = useState("general");
  const [activeLink, setActiveLink] = useState("communities");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  const communityComponents = {
    ai: <AICommunity isMobile={isMobile} />,
    cyber: <CyberCommunity isMobile={isMobile} />,
    hack: <HackCommunity isMobile={isMobile} />,
    design: <DesignCommunity isMobile={isMobile} />,
    general: (
      <div className="community__sub-orgs--mobile__description">
        <p>
          ACM at UCSD is one large community, but it is made up of several
          smaller communities focused on specific areas of technology.
        </p>
        <p>Learn more about each community</p>
      </div>
    ),
  };

  const titleClassName = `link ${activeLink === 'initiatives' ? 'glow-on-hover' : ''}`;

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
                src={
                  selected === "hack" ? HackLogoSelected.src : HackLogo.src
                }
                alt="Hack Logo"
              />
            </button>
            <button onClick={() => setSelected("design")}>
              <img
                src={
                  selected === "design" ? DesignLogoSelected.src : DesignLogo.src
                }
                alt="Design Logo"
              />
            </button>
          </div>
          {communityComponents[selected]}
        </section>
      ) : (
      <>
      <section className="community__hero">
        <div className="community__hero__toggle">
            <Link href="">
              <h3>
                <a className={`${activeLink === 'communities' ? 'active' : ''}`} onClick={() => handleLinkClick("communities")}>
                  Communities
                </a>
              </h3>
            </Link>
            <Link href="">
              <h3>
                <a className={`${activeLink === 'initiatives' ? 'active' : ''}`} onClick={() => handleLinkClick("initiatives")}>
                  Initiatives
                </a>
              </h3>
            </Link>
          </div>
          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          {activeLink === "communities" && (
          <section className="community__navigator">
            <AITitle glowClassName="" isMobile={isMobile} open={selected.toLocaleLowerCase() === "ai"} setSelected={setSelected} />
            <CyberTitle glowClassName="" isMobile={isMobile} open={selected.toLocaleLowerCase() === "cyber"} setSelected={setSelected} />
            <HackTitle glowClassName="" isMobile={isMobile} open={selected.toLocaleLowerCase() === "hack"} setSelected={setSelected} />
            <DesignTitle glowClassName="" isMobile={isMobile} open={selected.toLocaleLowerCase() === "design"} setSelected={setSelected} />
          </section>
          )}
          {activeLink === "initiatives" && (
          <section className="community__navigator">
            <BitByteTitle glowClassName={titleClassName} isMobile={isMobile} open={selected.toLocaleLowerCase() === "bit byte"} setSelected={setSelected} />
            <OutreachTitle glowClassName={titleClassName} isMobile={isMobile} open={selected.toLocaleLowerCase() === "reach"} setSelected={setSelected} />
            <ProjectsTitle glowClassName={titleClassName} isMobile={isMobile} open={selected.toLocaleLowerCase() === "projects"} setSelected={setSelected} />
            <SpaceTitle glowClassName={titleClassName} isMobile={isMobile} open={selected.toLocaleLowerCase() === "space"} setSelected={setSelected} />
          </section>
          )}
      </section>
      {/* <div className="spacer80px"></div> */}
      <section className="community__sub-orgs">
        
        {selected.toLocaleLowerCase() === "ai" ? <AICommunity isMobile={isMobile} /> : null}
        {selected.toLocaleLowerCase() === "cyber" ? <CyberCommunity isMobile={isMobile} /> : null }
        {selected.toLocaleLowerCase() === "hack" ? <HackCommunity isMobile={isMobile} /> : null}
        {selected.toLocaleLowerCase() === "design" ? <DesignCommunity isMobile={isMobile} /> : null}
      </section>
      
      <section className="community__sub-orgs">
        {selected.toLocaleLowerCase() === "bit byte" ? <BitByteDescription isMobile={isMobile} /> : null}
        {selected.toLocaleLowerCase() === "reach" ? <OutreachDescription isMobile={isMobile} /> : null }
        {selected.toLocaleLowerCase() === "projects" ? <ProjectsDescription isMobile={isMobile} /> : null}
        {selected.toLocaleLowerCase() === "space" ? <SpaceDescription isMobile={isMobile} /> : null}
      </section>

      </>
        
      )}
    </>
  );
};

export default CommunitySubOrgs;
