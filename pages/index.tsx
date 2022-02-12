import HomeHero from "src/sections/home/Home.Hero";
import HomeCommunities from "src/sections/home/Home.Communities";
import HomeJoinTheClub from "src/sections/home/Home.JoinTheClub";
import HomeEvents from "src/sections/home/Home.Events";
import SEO from "src/components/SEO";
import CoolLogo from "public/assets/cool_logo_1000x1000.png";
const IndexPage: React.FC = () => (
  <>
    <SEO
      title="ACM at UCSD"
      path="/"
      description="Join the club. ACM at UCSD is an inclusive community of students passionate about technology. 1000+ UCSD members. 120+ annual events. 850+ cups of boba served."
      image={CoolLogo.src}
    />
    <HomeHero />
    <HomeJoinTheClub />
    <HomeEvents />
    <HomeCommunities />
  </>
);

export default IndexPage;
