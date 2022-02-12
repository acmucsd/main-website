import { useState, useEffect } from "react";
import { Size, useWindowSize } from "src/utils";

import SEO from "src/components/SEO";

import CommunityHero from "src/sections/community/Community.Hero";
import CommunitySuborgs from "src/sections/community/Community.Suborgs";
import ACMWhiteLogo from "public/assets/ACMWhiteLogo.png";

const CommunitiesPage: React.FC = () => {
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile((size.width || 0) <= 812);
  }, [size]);

  return (
    <>
      <SEO
        title="Communities"
        path="/communities"
        description="ACM at UCSD is one large community, but it is made up of several smaller communities focused on specific areas of technology."
        image={ACMWhiteLogo.src}
      />
      <CommunityHero isMobile={isMobile} />
      <CommunitySuborgs isMobile={isMobile} />
    </>
  );
};

export default CommunitiesPage;
