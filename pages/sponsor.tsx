import SEO from "src/components/SEO";

import SponsorshipLogo from "src/sections/sponsorship/Sponsorship.Logos";
import SponsorshipInfo from "src/sections/sponsorship/Sponsorship.Info";
import SponsorshipBenefits from "src/sections/sponsorship/Sponsorship.Benefits";
import SponsorHeroLogo from "public/assets/sponsor-images/sponsor_hero.png";

const SponsorshipPage: React.FC = () => (
  <>
    <SEO
      title="Sponsor | ACM at UCSD"
      path="/sponsor"
      description="Impact a community of 1000+ aspiring developers, designers, and innovators!"
      image={SponsorHeroLogo.src}
    />
    <SponsorshipInfo image={SponsorHeroLogo.src} />
    <SponsorshipLogo />
    <SponsorshipBenefits />
  </>
);

export default SponsorshipPage;
