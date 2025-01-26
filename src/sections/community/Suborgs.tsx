import { useState } from "react";
import styles from "./Suborgs.module.scss";

import AIDiscord from "public/assets/communities-links/ai-discord.svg";
import AIHome from "public/assets/communities-links/ai-home.svg";
import AIInstagram from "public/assets/communities-links/ai-instagram.svg";
import CyberDiscord from "public/assets/communities-links/cyber-discord.svg";
import CyberHome from "public/assets/communities-links/cyber-home.svg";
import SDCTFIcon from "public/assets/communities-links/sdctf.svg";
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
import OutreachLogo from "public/assets/logos/reach.png";
import ProjectsLogo from "public/assets/logos/projects.png";
import SpaceLogo from "public/assets/logos/space.svg";

import BitByte1 from "public/assets/communities-images/BitByte/BitByte1.jpg";
import BitByte2 from "public/assets/communities-images/BitByte/BitByte2.jpg";
import BitByte3 from "public/assets/communities-images/BitByte/BitByte3.jpg";
import BitByte4 from "public/assets/communities-images/BitByte/BitByte4.jpg";

import Outreach1 from "public/assets/communities-images/Outreach/Reach1.jpg";
import Outreach2 from "public/assets/communities-images/Outreach/Reach2.jpg";
import Outreach3 from "public/assets/communities-images/Outreach/Reach3.jpg";
import Outreach4 from "public/assets/communities-images/Outreach/Reach4.png";

import SPACE1 from "public/assets/communities-images/SPACE/SPACE1.jpg";
import SPACE2 from "public/assets/communities-images/SPACE/SPACE2.jpg";
import SPACE3 from "public/assets/communities-images/SPACE/SPACE3.jpg";
import SPACE4 from "public/assets/communities-images/SPACE/SPACE4.jpg";

import Project1 from "public/assets/communities-images/Projects/ProjectShowcase.png";
import Project2 from "public/assets/communities-images/Projects/Project2.png";
import Project3 from "public/assets/communities-images/Projects/Project3.png";
import Project4 from "public/assets/communities-images/Projects/Project4.png";

import AI1 from "public/assets/communities-images/AI/AIOldTown.jpg";
import AI2 from "public/assets/communities-images/AI/AIBeach.jpg";
import AI3 from "public/assets/communities-images/AI/AIOldTown2.jpg";
import AI4 from "public/assets/communities-images/AI/AIStudy.jpg";

import Cyber1 from "public/assets/communities-images/Cyber/Cyber1.jpeg";
import Cyber2 from "public/assets/communities-images/Cyber/Cyber2.jpeg";
import Cyber3 from "public/assets/communities-images/Cyber/Cyber3.jpeg";
import Cyber4 from "public/assets/communities-images/Cyber/CyberBoardGame.jpeg";

import Hack1 from "public/assets/communities-images/Hack/Hack1.jpeg";
import Hack2 from "public/assets/communities-images/Hack/Hack2.jpeg";
import Hack3 from "public/assets/communities-images/Hack/Hack3.png";
import Hack4 from "public/assets/communities-images/Hack/Hack4.png";

import Design1 from "public/assets/communities-images/DesignACM/Design1.jpg";
import Design2 from "public/assets/communities-images/DesignACM/Design2.jpg";
import Design3 from "public/assets/communities-images/DesignACM/Design3.jpg";
import Design4 from "public/assets/communities-images/DesignACM/Design4.jpg";

import CommunityDescription from "./CommunityDescription";

const CommunitiesTitle: React.FC<{
  logo: StaticImageData;
  label: string;
  id: string;
}> = ({ logo, label, id }) => {
  return (
    <a href={`#${id}`} className={styles.logoCard}>
      <img src={logo.src} alt="" aria-hidden className={styles.logoHover} />
      <img src={logo.src} alt={label} className={styles.logo} />
    </a>
  );
};

const AICommunity: React.FC = () => (
  <CommunityDescription
    org="AI"
    colorClass={styles.red}
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
      {
        src: "https://www.instagram.com/acm_ai_ucsd/",
        logo: AIInstagram.src,
        alt: "AI Instagram",
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
    srcs={[AI1.src, AI2.src, AI3.src, AI4.src]}
    alts={[]}
  />
);

const CyberCommunity: React.FC = () => (
  <CommunityDescription
    org="Cyber"
    colorClass={styles.turquoise}
    links={[
      {
        src: "https://acmurl.com/cyberdiscord",
        logo: CyberDiscord.src,
        alt: "Cyber Discord",
      },
      {
        src: "https://cyber.acmucsd.com/",
        logo: CyberHome.src,
        alt: "Cyber Home",
      },
      {
        src: "https://sdc.tf/",
        logo: SDCTFIcon.src,
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
    srcs={[Cyber1.src, Cyber2.src, Cyber3.src, Cyber4.src]}
    alts={[
      "Picture of Cyber Event, Picture of Cyber Event, Picture of Cyber Event, Picture of Cyber Members Playing Board Games",
    ]}
  />
);

const HackCommunity: React.FC = () => (
  <CommunityDescription
    org="Hack"
    colorClass={styles.orange}
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
        ACM Hack is a community centered around software engineering and
        exploring what is possible through code.
        <br />
        <br />
        Our name comes from Hackathons – events where software engineers write
        code to produce innovative projects. Our goal is to enable and prepare a
        community of software engineers to build new things and excel in
        industry. We do this through technical workshops on industry-relevant
        tools, bootcamps, and projects.
        <br />
        <br />
        Join our Discord to engage with our community, and check out our website
        to learn more about us!
      </p>
    }
    srcs={[Hack1.src, Hack2.src, Hack3.src, Hack4.src]}
    alts={[
      "Picture of Hack Event",
      "Picture of Hack Event",
      "Picture of Hack Event",
      "Picture of Hack Event",
    ]}
  />
);

const DesignCommunity: React.FC = () => (
  <CommunityDescription
    org="Design"
    colorClass={styles.pink}
    links={[]}
    description={
      <p>
        ACM Design centers around UI/UX design and exploring what is possible
        through all parts of design like research, graphic, and product.
        <br />
        <br />
        We uplift new designers and curious developers to learn how to think
        like a designer. As a growing community, we host events to teach
        designers to go from mapping out ideas to building innovative
        prototypes. We strive to allow designers to have better conversations
        with developers while making developers more conscious of design
        methods.
      </p>
    }
    srcs={[Design1.src, Design2.src, Design3.src, Design4.src]}
    alts={[
      "People brainstorming designs on sticky notes",
      "Design presenter presenting",
      "Design event wide shot",
      "Example design project",
    ]}
  />
);

const BitByteDescription: React.FC = () => (
  <CommunityDescription
    org="Bit Byte"
    colorClass={styles.purple}
    links={[]}
    description={
      <p>
        Join ACM’s Bit-Byte program that pairs students to make lifelong
        friendships! Our upperclassmen bigs (bytes) help their littles (bits)
        grow in their academic, social, and professional lives.
      </p>
    }
    srcs={[BitByte1.src, BitByte2.src, BitByte4.src, BitByte3.src]}
    alts={["Bit Byte 1", "Bit Byte 2", "Bit Byte 3", "Bit Byte 4"]}
  />
);

const OutreachDescription: React.FC = () => (
  <CommunityDescription
    org="Reach"
    colorClass={styles.outreachGreen}
    links={[]}
    description={
      <p>
        Welcome to ACM Outreach at UCSD, where our mission is to ignite a
        passion for computing and STEM among K-12 students, with a special focus
        on those who are underrepresented in the computing community. Our goal
        is to empower students to explore the exciting world of computing by
        nurturing their curiosity and enthusiasm for technology. Join us in
        inspiring the next generation of innovators and problem solvers!
      </p>
    }
    srcs={[Outreach1.src, Outreach2.src, Outreach3.src, Outreach4.src]}
    alts={["Outreach 1", "Outreach 2", "Outreach 3", "Outreach 4"]}
  />
);

const ProjectsDescription: React.FC = () => (
  <CommunityDescription
    org="Projects"
    colorClass={styles.grey}
    links={[]}
    description={
      <p>
        Sign up to join a team in our quarter-long projects. Grow your skills in
        coding, design, or project management.
      </p>
    }
    srcs={[Project1.src, Project2.src, Project3.src, Project4.src]}
    alts={[]}
  />
);

const SpaceDescription: React.FC = () => (
  <CommunityDescription
    org="Space"
    colorClass={styles.blue}
    links={[]}
    description={
      <p>
        Through SPACE, students and recruiters can connect and interact with
        each other regarding professional opportunities such as internships,
        full or part-time positions, and student programs.
      </p>
    }
    srcs={[SPACE1.src, SPACE2.src, SPACE3.src, SPACE4.src]}
    alts={["Space 1", "Space 2", "Space 3", "Space 4"]}
  />
);

const CommunitySubOrgs: React.FC = () => {
  const [selected, setSelected] = useState("general");

  return (
    <>
      <h1 className={styles.title}>
        Explore <strong>ACM</strong>
      </h1>
      <nav className={styles.sectionNav}>
        <a href="#communities">Communities</a>
        <a href="#initiatives">Initiatives</a>
      </nav>
      <section id="communities">
        <nav className={styles.subOrgNav}>
          <CommunitiesTitle id="ai" label="ACM AI" logo={AILogo} />
          <CommunitiesTitle id="cyber" label="ACM Cyber" logo={CyberLogo} />
          <CommunitiesTitle id="hack" label="ACM Hack" logo={HackLogo} />
          <CommunitiesTitle id="design" label="ACM Design" logo={DesignLogo} />
        </nav>
        <AICommunity />
        <CyberCommunity />
        <HackCommunity />
        <DesignCommunity />
      </section>
      <section id="initiatives">
        <nav className={styles.subOrgNav}>
          <CommunitiesTitle id="bitbyte" label="Bit Byte" logo={BitByteLogo} />
          <CommunitiesTitle
            id="outreach"
            label="ACM Outreach"
            logo={OutreachLogo}
          />
          <CommunitiesTitle
            id="projects"
            label="ACM Projects"
            logo={ProjectsLogo}
          />
          <CommunitiesTitle id="space" label="Space" logo={SpaceLogo} />
        </nav>
        <BitByteDescription />
        <OutreachDescription />
        <ProjectsDescription />
        <SpaceDescription />
      </section>
      <p className={styles.scrollDown}>Scroll down for more</p>
    </>
  );
};

export default CommunitySubOrgs;
