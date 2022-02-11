import Layout from "src/components/Layout";

import HomeHero from "src/sections/home/Home.Hero";
import HomeCommunities from "src/sections/home/Home.Communities";
import HomeJoinTheClub from "src/sections/home/Home.JoinTheClub";
import HomeEvents from "src/sections/home/Home.Events";
import SEO from "src/components/SEO";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="ACM at UCSD" />
    <HomeHero />
    <HomeJoinTheClub />
    <HomeEvents />
    <HomeCommunities />
  </Layout>
);

export default IndexPage;
