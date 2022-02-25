import { useEffect, useState } from "react";
import { Size, useWindowSize } from "src/utils";

import SEO from "src/components/SEO";

import AboutHero from "src/sections/about/About.Hero";
import AboutGetInvolved from "src/sections/about/About.GetInvolved";
import AboutMembership from "src/sections/about/About.Membership";
import AboutBoard from "src/sections/about/About.Board";

import HeroImage from "public/assets/about-images/about-hero.png";
import { BoardMemberProps } from "src/types";

const AboutPage: React.FC<{ board: BoardMemberProps[] }> = ({ board }) => {
  const size: Size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile((size.width || 0) <= 814);
  }, [size]);

  return (
    <>
      <SEO
        title="About"
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

const url = process.env.SPREADSHEET_URL;

export async function getStaticProps() {
  const rawData: { c: { v: any }[] }[] = await fetch(url) // This is the type thats given cant change
    .then((res) => res.text())
    .then((res) => JSON.parse(res.substring(47).slice(0, -2))?.table?.rows); // strip weird data header

  const get = (valueObj) => valueObj?.v ?? "";

  const getName = (userData) => get(userData[2]);

  const getOrg = (userData) => {
    if (get(userData[0]).toLowerCase() === "members at large") return "";
    return get(userData[0]).toLowerCase();
  };

  const getTitle = (userData) => {
    if (!get(userData[1]) || get(userData[0] === "-----")) return "";
    return get(userData[1]);
  };

  const getSpecialization = (userData) => {
    if (!get(userData[3]) || get(userData[3]) === "-----") return "";
    return get(userData[3]);
  };

  const getImage = (userData) => get(userData[22]);

  const getACMEmail = (userData) => get(userData[9]);

  const getUCSDEmail = (userData) => get(userData[10]);

  const getLinkedIn = (userData) => {
    return get(userData[13]).includes("https://www.linkedin.com/in/")
      ? get(userData[13])
      : `https://www.linkedin.com/in/${get(userData[13])}`;
  };

  const getWebsite = (userData) => get(userData[14]);

  return {
    props: {
      board: rawData
        .map((row) => row.c) // Map row object to row data array
        .map((userData) => ({
          name: getName(userData),
          org: getOrg(userData),
          title: getTitle(userData),
          specialization: getSpecialization(userData),
          profile_image: getImage(userData),
          email: getUCSDEmail(userData),
          linkedin_link: getLinkedIn(userData),
          personal_link: getWebsite(userData),
        }))
        .filter((user) => user.name !== "") // Filter out missing rows
        .filter((user) => user.org !== ""), // Filter out members at large
    },
  };
}
