import Image from "next/image";

import CommunitiesGrid from "src/components/CommunitiesGrid";
import ScrollDownArrow from "src/components/ScrollDownArrow";

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {

  return (
    <section className="community__hero">
      {isMobile ? null : (
        <>
          <h1>Communities</h1>
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
