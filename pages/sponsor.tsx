import SEO from "src/components/SEO";

import SponsorshipLogo from "src/sections/sponsorship/Sponsorship.Logos";
import SponsorshipInfo from "src/sections/sponsorship/Sponsorship.Info";
import SponsorshipBenefits from "src/sections/sponsorship/Sponsorship.Benefits";
import SponsorHeroLogo from "public/assets/sponsor-images/sponsor_hero.png";
import { NextPage } from "next";

import { getSponsorsData } from "src/api/SponsorAPI";
import { SponsorProps } from "src/types";

const SponsorshipPage: NextPage<{ sponsors: SponsorProps[] }> = ({ sponsors }) => (
  <>
    <SEO
      title="Sponsor | ACM at UCSD"
      path="/sponsor"
      description="Impact a community of 2000+ aspiring developers, designers, and innovators!"
      image={SponsorHeroLogo.src}
    />
    <SponsorshipInfo image={SponsorHeroLogo.src} />
    <SponsorshipLogo sponsors={sponsors} />
    <SponsorshipBenefits />
  </>
);

export default SponsorshipPage;

export async function getStaticProps() {
  const sponsorsData = await getSponsorsData();
  return {
    props: {
      sponsors: sponsorsData || [],
    },
    revalidate: 1 * 60 * 60 * 12, // generate once every 12 hours (in seconds)
  };
}
