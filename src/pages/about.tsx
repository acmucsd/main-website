import { useEffect, useState } from "react";
import { Size, useWindowSize } from "src/utils";

import SEO from "src/components/SEO";

import AboutHero from "src/sections/about/About.Hero";
import AboutGetInvolved from "src/sections/about/About.GetInvolved";
import AboutMembership from "src/sections/about/About.Membership";
import AboutBoard from "src/sections/about/About.Board";

const AboutPage: React.FC = () => {
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile((size.width || 0) < 814);
  }, [size]);

  return (
    <>
      <SEO title="About" />
      <AboutHero isMobile={isMobile} />
      <AboutGetInvolved isMobile={isMobile} />
      {!isMobile && <AboutMembership />}
      <AboutBoard isMobile={isMobile} />
    </>
  );
};

export default AboutPage;
