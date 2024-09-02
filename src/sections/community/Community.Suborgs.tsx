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

const CommunityImages: React.FC<{
  links: { src: string; logo: string; alt: string }[];
}> = ({ links }) => {
  return(
    <div>
      
    </div>
  );
};

const CommunitiesTitle: React.FC<{
  open?: boolean;
  org: string;
  color: string;
  logo: string;
  website: string;
  isMobile: boolean;
  setSelected: (org: string) => void;
  selected: boolean;
}> = ({
  open,
  logo,
  website,
  org,
  color,
  isMobile,
  setSelected,
  selected
}) => {

  const determineShadowColor = () => {
    // Define the drop shadow color based on `org`
    return color;
  };

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
      default:
        return org;
    }
  }

  return (
    <>
      <div className="community__sub-orgs__logo-card" data-open={open}>
        {/* <button > */}
          <img
              src={logo}
              alt={`ACM ${org}`}
              className="community__sub-orgs__logo-card__logo"
              onClick={() => setSelected(org)}
              style={{filter: selected ? `drop-shadow(0 0 1rem ${color})` : 'none', '--color': color} as React.CSSProperties}
              
            />
        {/* </button> */}
        
        
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

const AITitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; }> = ({ isMobile, open, setSelected }) => (
  <CommunitiesTitle
    org="AI"
    color="red"
    website="https://ai.acmucsd.com/"
    logo={AILogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    selected
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

const CyberTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; }> = ({ isMobile, open, setSelected }) => (
  <CommunitiesTitle
    org="Cyber"
    color="turquoise"
    isMobile={isMobile}
    website="https://sdc.tf/"
    logo={CyberLogo.src}
    open={open}
    setSelected={setSelected}
    selected={false}
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

const HackTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; }> = ({ isMobile, open, setSelected }) => (
  <CommunitiesTitle
    org="Hack"
    color="orange"
    website="https://hack.acmucsd.com/"
    logo={HackLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    selected={false}
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

const DesignTitle: React.FC<{ isMobile: boolean, open?:boolean, setSelected: (org: string) => void; }> = ({ isMobile, open, setSelected }) => (
  <CommunitiesTitle
    org="Design"
    color="pink"
    website="https://acmucsd.com/"
    logo={DesignLogo.src}
    isMobile={isMobile}
    open={open}
    setSelected={setSelected}
    selected={false}
  />
);

const CommunitySubOrgs: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [selected, setSelected] = useState("general");
  console.log(selected);

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
        <section className="community__navigator">
          <AITitle isMobile={isMobile} open={selected.toLocaleLowerCase() === "ai"} setSelected={setSelected} />
          <CyberTitle isMobile={isMobile} open={selected.toLocaleLowerCase() === "cyber"} setSelected={setSelected} />
          <HackTitle isMobile={isMobile} open={selected.toLocaleLowerCase() === "hack"} setSelected={setSelected} />
          <DesignTitle isMobile={isMobile} open={selected.toLocaleLowerCase() === "design"} setSelected={setSelected} />
        </section>
        <section className="community__sub-orgs">
          <div className="spacer80px"></div>
          <AICommunity isMobile={isMobile} />
          <CyberCommunity isMobile={isMobile} />
          <HackCommunity isMobile={isMobile} />
          <DesignCommunity isMobile={isMobile} />
        </section>
      </>
        
      )}
    </>
  );
};

export default CommunitySubOrgs;
