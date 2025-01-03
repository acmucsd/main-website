import Link from "next/link";
import { useState } from "react";

import CommunitiesGrid from "src/components/CommunitiesGrid";
import ScrollDownArrow from "src/components/ScrollDownArrow";
import CommunitySubOrgs from "./Community.Suborgs";

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [activeLink, setActiveLink] = useState("communities");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (
    <section className="community__hero">
      {isMobile ? null : (
        <>
          <div className="community__hero__toggle">
              <h3>
                <button className={`${activeLink === 'communities' ? 'active' : ''}`} onClick={() => handleLinkClick("communities")}>
                  Communities
                </button>
              </h3>
              <h3>
                <button className={`${activeLink === 'initiatives' ? 'active' : ''}`} onClick={() => handleLinkClick("initiatives")}>
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
