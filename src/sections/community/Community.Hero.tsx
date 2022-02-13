import { useState, useEffect } from "react";
import Image from "next/image";

import CommunitiesGrid from "src/components/CommunitiesGrid";
import ArrowIcon from 'public/assets/arrow.svg'

const CommunityHero: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="community__hero">
      {!isMobile && (
        <>
          <h1>Communities</h1>
          <p>
            ACM at UCSD is one large community, but it is made up of several
            smaller communities focused on specific areas of technology.
          </p>
          <div className="community__hero__communities">
            <CommunitiesGrid />
          </div>
          {!scrolled && (
            <img
              className="arrow"
              onClick={() =>
                window.scrollBy({
                  top: window.innerHeight - 78,
                })
              }
              alt=""
              src={ArrowIcon.src}
            />
          )}
        </>
      )}
    </section>
  );
};

export default CommunityHero;
