import { useEffect, useState } from "react";
import styles from "./Suborgs.module.scss";

import AIDiscord from "public/assets/communities-links/ai-discord.svg";
import AIHome from "public/assets/communities-links/ai-home.svg";
import AIInstagram from "public/assets/communities-links/ai-instagram.svg";
import CyberDiscord from "public/assets/communities-links/cyber-discord.svg";
import CyberHome from "public/assets/communities-links/cyber-home.svg";
import SDCTFIcon from "public/assets/communities-links/sdctf.svg";
import HackDiscord from "public/assets/communities-links/hack-discord.svg";
import HackHome from "public/assets/communities-links/hack-home.svg";
import OutreachDiscord from "public/assets/communities-links/outreach-discord.svg";
import OutreachHome from "public/assets/communities-links/outreach-home.svg";
import ProjectsHome from "public/assets/communities-links/projects-home.svg";
import SpaceHome from "public/assets/communities-links/space-home.svg";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import DesignLogo from "public/assets/logos/acm-design.svg";
import BitByteLogo from "public/assets/logos/bitbyte.png";
import OutreachLogo from "public/assets/logos/acm-outreach.svg";
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
  selected: string;
  logo: StaticImageData;
  label: string;
  id: string;
  spaceLogo?: boolean;
}> = ({ selected, logo, label, id, spaceLogo }) => {
  return (
    <a
      href={`#${id}`}
      className={`${styles.logoCard} ${selected === id ? styles.active : ""} ${
        spaceLogo ? styles.spaceLogo : ""
      }`}
    >
      <img src={logo.src} alt="" aria-hidden className={styles.logoHover} />
      <img src={logo.src} alt={label} className={styles.logo} />
    </a>
  );
};

const AICommunity: React.FC = () => (
  <CommunityDescription
    id="ai"
    name="ACM AI"
    subtitle="Artificial Intelligence"
    colorClass={styles.red}
    links={[
      {
        src: "https://acmurl.com/ai-disc",
        logo: AIDiscord.src,
        alt: "ACM AI Discord",
      },
      {
        src: "https://ai.acmucsd.com/",
        logo: AIHome.src,
        alt: "ACM AI Website",
      },
      {
        src: "https://www.instagram.com/acm_ai_ucsd/",
        logo: AIInstagram.src,
        alt: "ACM AI Instagram",
      },
    ]}
    description={
      <>
        <p>
          Our goals are to help build a community of AI enthusiasts at UCSD and
          connect that community to the broader AI network.
        </p>
        <p>
          We strive to keep AI fun and accessible to all. We want to help you
          navigate your path around the complex world of AI through workshops,
          fun hands on competitions, mentor-guided projects, networking events
          and more!
        </p>
        <p>
          Join our Discord and sign up for an account on our website to get
          access to all the perks and be up to date on AI and the community!
        </p>
      </>
    }
    srcs={[AI1.src, AI2.src, AI3.src, AI4.src]}
    alts={[
      "members sitting at a table smiling",
      "three people, one holding a massive water jug, hiking by the sea",
      "a bunch of people sitting and smiling at a table",
      "people masked outside the elevators at Nobel Drive Station",
    ]}
  />
);

const CyberCommunity: React.FC = () => (
  <CommunityDescription
    id="cyber"
    name="ACM Cyber"
    subtitle="Cybersecurity"
    colorClass={styles.turquoise}
    links={[
      {
        src: "https://acmurl.com/cyberdiscord",
        logo: CyberDiscord.src,
        alt: "ACM Cyber Discord",
      },
      {
        src: "https://cyber.acmucsd.com/",
        logo: CyberHome.src,
        alt: "ACM Cyber Website",
      },
      {
        src: "https://sdc.tf/",
        logo: SDCTFIcon.src,
        alt: "SDCTF",
      },
    ]}
    description={
      <>
        <p>
          ACM Cyber aims to provide member-first opportunities to learn, teach,
          and practice critical cybersecurity skills to help the UCSD community
          thrive.
        </p>
        <p>
          With over 700 members currently registered, we are one of the fastest
          growing organizations on campus. We host hands-on workshops, industry
          panels, competitive CTF training, and mentorship opportunities for our
          members. Our largest event of the year is San Diego CTF (Capture the
          Flag), a 48 hour jeopardy-style hacking game.
        </p>
      </>
    }
    srcs={[Cyber1.src, Cyber2.src, Cyber3.src, Cyber4.src]}
    alts={[
      'ACM Cyber Board stands in front of a UCSD kiosk set to display "Cyber"',
      "members picking locks at Lockpicking 102",
      "ACM Cyber president Nick helps members pick a lock",
      "Cyber Members Playing Board Games",
    ]}
  />
);

const HackCommunity: React.FC = () => (
  <CommunityDescription
    id="hack"
    name="ACM Hack"
    subtitle="Software Engineering"
    colorClass={styles.orange}
    links={[
      {
        src: "https://acmurl.com/hack-discord",
        logo: HackDiscord.src,
        alt: "ACM Hack Discord",
      },
      {
        src: "https://hack.acmucsd.com/",
        logo: HackHome.src,
        alt: "ACM Hack Website",
      },
    ]}
    description={
      <>
        <p>
          ACM Hack is a community centered around software engineering and
          exploring what is possible through code.
        </p>
        <p>
          Our name comes from hackathons—events where software engineers write
          code to produce innovative projects. Our goal is to enable and prepare
          a community of software engineers to build new things and excel in
          industry. We do this through technical workshops on industry-relevant
          tools, bootcamps, and projects.
        </p>
        <p>
          Join our Discord to engage with our community, and check out our
          website to learn more about us!
        </p>
      </>
    }
    srcs={[Hack1.src, Hack2.src, Hack3.src, Hack4.src]}
    alts={[
      "members locking in at a Hack workshop",
      "members watch presentation at a Hack Event",
      "ACM Hack president Nikhil helps someone at a Hack Event",
      "members consider what their project responsibilities and technologies are at a Hack Event",
    ]}
  />
);

const DesignCommunity: React.FC = () => (
  <CommunityDescription
    id="design"
    name="ACM Design"
    subtitle="UI/UX Design"
    colorClass={styles.pink}
    links={[]}
    description={
      <>
        <p>
          ACM Design centers around UI/UX design and exploring what is possible
          through all parts of design like research, graphic, and product.
        </p>
        <p>
          We uplift new designers and curious developers to learn how to think
          like a designer. As a growing community, we host events to teach
          designers to go from mapping out ideas to building innovative
          prototypes. We strive to allow designers to have better conversations
          with developers while making developers more conscious of design
          methods.
        </p>
      </>
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
    id="bitbyte"
    name="ACM Bit–Byte"
    subtitle="Big–Little Program"
    colorClass={styles.purple}
    links={[]}
    description={
      <p>
        Join ACM’s Bit–Byte program that pairs students to make lifelong
        friendships! Our upperclassmen bigs (bytes) help their littles (bits)
        grow in their academic, social, and professional lives.
      </p>
    }
    srcs={[BitByte1.src, BitByte2.src, BitByte4.src, BitByte3.src]}
    alts={[
      "one or two trees in the bit byte program",
      "VP Membership Tony presents tips for success for the bit byte program",
      'members talk over some tapioca express "boba"',
      "members at bit byte allocation",
    ]}
  />
);

const OutreachDescription: React.FC = () => (
  <CommunityDescription
    id="outreach"
    name="ACM Outreach"
    subtitle="Community Outreach"
    colorClass={styles.outreachGreen}
    links={[
      {
        src: "https://acmurl.com/outreach-discord",
        logo: OutreachDiscord.src,
        alt: "ACM Outreach Discord",
      },
      {
        src: "https://outreach.acmucsd.com/",
        logo: OutreachHome.src,
        alt: "ACM Outreach Website",
      },
    ]}
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
    alts={[
      "Boy Scouts and Outreach volunteers make diamond signs with their hands in front of the Warren Bear",
      "Outreach volunteers help out Boy Scouts with their Scratch projects",
      "a child studiously considers whether to leave Scratch with their project changes unsaved",
      "Boy Scouts and Outreach volunteers share their favorite video games",
    ]}
  />
);

const ProjectsDescription: React.FC = () => (
  <CommunityDescription
    id="projects"
    name="ACM Projects"
    subtitle="Quarterly Projects"
    colorClass={styles.blue}
    links={[
      {
        src: "https://projects.acmucsd.com/",
        logo: ProjectsHome.src,
        alt: "ACM Projects Website",
      },
    ]}
    description={
      <p>
        Sign up to join a team in our quarter-long projects. Grow your skills in
        coding, design, or project management.
      </p>
    }
    srcs={[Project1.src, Project2.src, Project3.src, Project4.src]}
    alts={[
      "members check out projects at project showcase",
      "a project team makes diamond signs with their hands at project showcase, celebrating the completion of their project over the course of a quarter",
      "a team hangs out at a social to take a break from their project",
      "a project team",
    ]}
  />
);

const SpaceDescription: React.FC = () => (
  <CommunityDescription
    id="space"
    name="SPACE"
    subtitle="Career Fair"
    colorClass={styles.spaceBlue}
    links={[
      {
        src: "https://space.acmucsd.com/",
        logo: SpaceHome.src,
        alt: "SPACE Website",
      },
    ]}
    description={
      <p>
        Through SPACE, students and recruiters can connect and interact with
        each other regarding professional opportunities such as internships,
        full or part-time positions, and student programs.
      </p>
    }
    srcs={[SPACE1.src, SPACE2.src, SPACE3.src, SPACE4.src]}
    alts={[
      "students talk to a company at SPACE",
      "students talk to a recruiter at SPACE",
      "LPL financial is hiring! recruiters give a thumbs-up",
      "students excitedly await their turn to present themselves to companies",
    ]}
  />
);

const CommunitySubOrgs: React.FC = () => {
  const [section, setSection] = useState<"communities" | "initiatives">(
    "communities"
  );
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      setSection(
        middle >
          (document.getElementById("initiatives")?.getBoundingClientRect()
            .top ?? 0)
          ? "initiatives"
          : "communities"
      );

      const communities = document.getElementsByClassName(
        "community-description"
      );
      for (const community of Array.from(communities).reverse()) {
        const { top } = community.getBoundingClientRect();
        if (middle > top) {
          setSelected(community.id);
          return;
        }
      }
      setSelected("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className={styles.title}>
        Explore <strong>ACM</strong>
      </h1>
      <p className={styles.tagLine}>
        ACM at UCSD is one large community, but it is made up of several smaller
        communities focused on specific areas of technology.
      </p>
      <nav className={styles.sectionNav}>
        <a
          href="#communities"
          className={section === "communities" ? styles.active : ""}
        >
          Communities
        </a>
        <a
          href="#initiatives"
          className={section === "initiatives" ? styles.active : ""}
        >
          Initiatives
        </a>
      </nav>
      <section id="communities">
        <h2 className={styles.sectionHeading}>Communities</h2>
        <nav className={styles.subOrgNav}>
          <CommunitiesTitle
            selected={selected}
            id="ai"
            label="ACM AI"
            logo={AILogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="cyber"
            label="ACM Cyber"
            logo={CyberLogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="hack"
            label="ACM Hack"
            logo={HackLogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="design"
            label="ACM Design"
            logo={DesignLogo}
          />
        </nav>
        <AICommunity />
        <CyberCommunity />
        <HackCommunity />
        <DesignCommunity />
      </section>
      <section id="initiatives">
        <h2 className={styles.sectionHeading}>Initiatives</h2>
        <nav className={styles.subOrgNav}>
          <CommunitiesTitle
            selected={selected}
            id="bitbyte"
            label="Bit Byte"
            logo={BitByteLogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="outreach"
            label="ACM Outreach"
            logo={OutreachLogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="projects"
            label="ACM Projects"
            logo={ProjectsLogo}
          />
          <CommunitiesTitle
            selected={selected}
            id="space"
            label="SPACE"
            logo={SpaceLogo}
            spaceLogo
          />
        </nav>
        <BitByteDescription />
        <OutreachDescription />
        <ProjectsDescription />
        <SpaceDescription />
      </section>
    </>
  );
};

export default CommunitySubOrgs;
