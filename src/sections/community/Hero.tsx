import Link from "next/link";
import { useState } from "react";

import CommunitiesGrid from "src/components/CommunitiesGrid";
import ScrollDownArrow from "src/components/ScrollDownArrow";
import CommunitySubOrgs from "./Suborgs";
import styles from "./Hero.module.scss";

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [activeLink, setActiveLink] = useState("communities");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className={styles.hero}>
      {isMobile ? null : (
        <>
          <div className={styles.toggle}>
            <h3>
              <button
                className={`${
                  activeLink === "communities" ? styles.active : ""
                }`}
                onClick={() => handleLinkClick("communities")}
              >
                Communities
              </button>
            </h3>
            <h3>
              <button
                className={`${
                  activeLink === "initiatives" ? styles.active : ""
                }`}
                onClick={() => handleLinkClick("initiatives")}
              >
                Initiatives
              </button>
            </h3>
          </div>

          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          <div className="community__hero__communities">
            <CommunitiesGrid />
          </div>
          <ScrollDownArrow />
        </>
      )}
    </section>
  );
};

export default CommunityHero;
