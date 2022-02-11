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
// import DesignLogoSelected from "public/assets/communities-navigation/design-selected.svg";
import AILogo from "public/assets/logos/acm-ai.svg";
import CyberLogo from "public/assets/logos/acm-cyber.svg";
import HackLogo from "public/assets/logos/acm-hack.svg";
import InnovateLogo from "public/assets/logos/acm-innovate.svg";
// import DesignLogo from "public/assets/logos/acm-design.svg";

const AICommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="community__sub-orgs__community-card" id="AI">
      <div className="color_slide redbg" />
      <div className="community__sub-orgs__community-card__content">
        {!isMobile && (
          <a href="https://ai.acmucsd.com/">
            <img
              src={AILogo.src}
              alt="ACM AI"
              className="community__sub-orgs__community-card__logo"
            />
          </a>
        )}
        <div>
          <div className="community__sub-orgs__community-card__header">
            {isMobile && <img src={AILogo.src} alt="ACM AI" />}
            <h1 className="red">ACM AI</h1>
          </div>
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
          <div className="community-links">
            <a href="https://acmurl.com/ai-disc">
              <img src={AIDiscord.src} alt="AI Discord" />
            </a>
            <a href="https://ai.acmucsd.com/">
              <img src={AIHome.src} alt="AI Home" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CyberCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="community__sub-orgs__community-card" id="Cyber">
      <div className="color_slide turquoisebg" />

      <div className="community__sub-orgs__community-card__content">
        {!isMobile && (
          <a href="https://sdc.tf/">
            <img
              src={CyberLogo.src}
              alt="ACM Cyber"
              className="community__sub-orgs__community-card__logo"
            />
          </a>
        )}
        <div>
          <div className="community__sub-orgs__community-card__header">
            {isMobile && <img src={CyberLogo.src} alt="ACM Cyber" />}
            <h1 className="turquoise">ACM Cyber</h1>
          </div>
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
          </p>
          <div className="community-links">
            <a href="https://acmurl.com/cyberdiscord">
              <img src={CyberDiscord.src} alt="Cyber Discord" />
            </a>
            <a href="https://sdc.tf/">
              <img src={CyberHome.src} alt="Cyber Home" />
            </a>
            <a href="https://www.facebook.com/cyberucsd">
              <img src={CyberFacebook.src} alt="Cyber Facebook" />
            </a>
            <a href="https://twitter.com/cyberucsd">
              <img src={CyberTwitter.src} alt="Cyber Twitter" />
            </a>
            <a href="https://www.youtube.com/playlist?list=PLpmCTDt8lemWaQ_ZruBe3Dt6ddtVdX-yR">
              <img src={CyberYoutube.src} alt="Cyber Youtube" />
            </a>
            <a href="https://www.linkedin.com/company/cyber-ucsd/">
              <img src={CyberLinkedin.src} alt="Cyber LinkedIn" />
            </a>
            <a href="https://acmurl.com/joincyber">
              <img src={CyberMail.src} alt="Cyber Mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HackCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="community__sub-orgs__community-card" id="Hack">
      <div className="color_slide yellowbg" />

      <div className="community__sub-orgs__community-card__content">
        {!isMobile && (
          <a href="https://hack.acmucsd.com/">
            <img
              src={HackLogo.src}
              alt="ACM Hack"
              className="community__sub-orgs__community-card__logo"
            />
          </a>
        )}
        <div>
          <div className="community__sub-orgs__community-card__header">
            {isMobile && <img src={HackLogo.src} alt="ACM Hack" />}
            <h1 className="yellow">ACM Hack</h1>
          </div>
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
            Our events are for people of all skill levels, so whether
            you&apos;re a first-time coder or a skilled programmer, we&apos;d be
            happy to have you join the ACM Hack community!
          </p>
          <div className="community-links">
            <a href="http://acmurl.com/hack-disc">
              <img src={HackDiscord.src} alt="Hack Discord" />
            </a>
            <a href="https://hack.acmucsd.com/">
              <img src={HackHome.src} alt="Hack Home" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const InnovateCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="community__sub-orgs__community-card" id="Innovate">
      <div className="color_slide purplebg" />

      <div className="community__sub-orgs__community-card__content">
        {!isMobile && (
          <a href="https://innovate.acmucsd.com/">
            <img
              src={InnovateLogo.src}
              alt="ACM Innovate"
              className="community__sub-orgs__community-card__logo"
            />
          </a>
        )}
        <div>
          <div className="community__sub-orgs__community-card__header">
            {isMobile && <img src={InnovateLogo.src} alt="ACM Innovate" />}
            <h1 className="purple">ACM Innovate</h1>
          </div>
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
          <div className="community-links">
            <a href="https://acmurl.com/innovate-discord">
              <img src={InnovateDiscord.src} alt="Innovate Discord" />
            </a>
            <a href="https://innovate.acmucsd.com/">
              <img src={InnovateHome.src} alt="Innovate Home" />
            </a>
            <a href="https://acmurl.com/innovate-youtube">
              <img src={InnovateYoutube.src} alt="Innovate Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// const DesignCommunity: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
//   return (
//     <div className="community__sub-orgs__community-card" id="Design">
//       <div className="color_slide pinkbg" />

//       <div className="community__sub-orgs__community-card__content">
//         {!isMobile && (
//           <a href="https://design.acmucsd.com/">
//             <img
//               src={DesignLogo.src}
//               alt="ACM Design"
//               className="community__sub-orgs__community-card__logo"
//             />
//           </a>
//         )}
//         <div>
//           <div className="community__sub-orgs__community-card__header">
//             {isMobile && <img src={DesignLogo.src} alt="ACM Design" />}
//             <h1 className="pink">ACM Design</h1>
//           </div>
//           <p>
//             We create and foster an entrepreneurial spirit with regard to both
//             new nonprofit and for-profit companies.
//             <br />
//             <br />
//             Our mission is to increase interest and accessibility in startups
//             and bring the innovation spirit and mentality to members’ careers.
//             <br />
//             <br />
//             We frequently host activities: guest speaker talks, workshops, and
//             side projects. We have a lot of exciting stuff planned for the
//             future!
//             <br />
//             <br />
//             All skill levels welcome!
//           </p>
//           <div className="community-links" id="Design">
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const CommunitySubOrgs: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [selected, setSelected] = useState("");

  const renderCommunity = (suborg: string) => {
    switch (suborg) {
      case "ai":
        return <AICommunity isMobile={isMobile} />;
      case "cyber":
        return <CyberCommunity isMobile={isMobile} />;
      case "hack":
        return <HackCommunity isMobile={isMobile} />;
      case "innovate":
        return <InnovateCommunity isMobile={isMobile} />;
      // case "design":
      //   return <DesignCommunity isMobile={isMobile} />;
      default:
        return (
          <div className="community__sub-orgs--mobile__description">
            <p>
              ACM at UCSD is one large community, but it is made up of several
              smaller communities focused on specific areas of technology.
            </p>
            <p>Learn more about each community</p>
          </div>
        );
    }
  };

  return (
    <>
      {!isMobile ? (
        <section className="community__sub-orgs">
          <div className="spacer80px" id="AI"></div>
          <AICommunity isMobile={isMobile} />
          <CyberCommunity isMobile={isMobile} />
          <HackCommunity isMobile={isMobile} />
          <InnovateCommunity isMobile={isMobile} />
          {/* <DesignCommunity isMobile={isMobile} /> */}
        </section>
      ) : (
        <>
          <section className="community__sub-orgs--mobile">
            <h1
              className="community__sub-orgs--mobile__header"
              onClick={() => setSelected("")}
            >
              Communities
            </h1>
            {renderCommunity(selected)}
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
              {/* <button onClick={() => setSelected("design")}>
                <img
                  src={
                    selected === "design"
                      ? DesignLogoSelected.src
                      : DesignLogo.src
                  }
                  alt="Design Logo"
                />
              </button> */}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default CommunitySubOrgs;
