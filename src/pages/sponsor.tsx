import SEO from "src/components/SEO";

import SponsorshipLogo from "src/sections/sponsorship/Sponsorship.Logos";
import SponsorshipInfo from "src/sections/sponsorship/Sponsorship.Info";
import SponsorshipBenefits from "src/sections/sponsorship/Sponsorship.Benefits";

const SponsorshipPage: React.FC = () => (
  <>
    <SEO title="Sponsors" />
    <SponsorshipInfo />
    <SponsorshipLogo />
    <SponsorshipBenefits />
  </>
);

export default SponsorshipPage;
