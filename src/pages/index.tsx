import HomeHero from "src/sections/home/Home.Hero";
import HomeCommunities from "src/sections/home/Home.Communities";
import HomeJoinTheClub from "src/sections/home/Home.JoinTheClub";
import HomeEvents from "src/sections/home/Home.Events";
import SEO from "src/components/SEO";

const IndexPage: React.FC = () => (
  <>
    <SEO title="ACM at UCSD" />
    <HomeHero />
    <HomeJoinTheClub />
    <HomeEvents />
    <HomeCommunities />
  </>
);

export default IndexPage;
