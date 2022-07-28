import { useEffect, useState } from "react";
import { Size, useWindowSize } from "src/utils/general";

import SEO from "src/components/SEO";

import AboutHero from "src/sections/about/About.Hero";
import AboutGetInvolved from "src/sections/about/About.GetInvolved";
import AboutMembership from "src/sections/about/About.Membership";
import AboutBoard from "src/sections/about/About.Board";

import HeroImage from "public/assets/about-images/about-hero.png";
import { BoardMemberProps } from "src/types";
import { getBoardData } from "src/api/BoardAPI";
import { NextPage } from "next";

const AboutPage: NextPage<{ board: BoardMemberProps[] }> = ({ board }) => {
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile((size.width || 0) <= 814);
  }, [size]);

  return (
    <>
      <SEO
        title="About | ACM at UCSD"
        path="/about"
        description="We are the Association for Computing Machinery at UCSD! We are an inclusive member-first community for all who are interested in the field of computing. We welcome all skill levels and majors!"
        image={HeroImage.src}
      />
      <AboutHero isMobile={isMobile} image={HeroImage.src} />
      <AboutGetInvolved isMobile={isMobile} />
      {isMobile ? null : <AboutMembership />}
      <AboutBoard isMobile={isMobile} board={board} />
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const boardData = await getBoardData();
  return {
    props: {
      board: boardData || [],
    },
    revalidate: 1 * 60 * 60, // generate once every hour (in seconds)
  };
}
