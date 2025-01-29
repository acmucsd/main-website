import SEO from "src/components/SEO";

import CommunitySuborgs from "src/sections/community/Suborgs";
import ACMWhiteLogo from "public/assets/ACMWhiteLogo.png";
import { NextPage } from "next";

const CommunitiesPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Communities | ACM at UCSD"
        path="/communities"
        description="ACM at UCSD is one large community, but it is made up of several smaller communities focused on specific areas of technology."
        image={ACMWhiteLogo.src}
      />
      <CommunitySuborgs />
    </>
  );
};

export default CommunitiesPage;
