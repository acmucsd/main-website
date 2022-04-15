import HomeHero from "src/sections/home/Home.Hero";
import HomeCommunities from "src/sections/home/Home.Communities";
import HomeJoinUs from "src/sections/home/Home.JoinUs";
import HomeEvents from "src/sections/home/Home.Events";
import SEO from "src/components/SEO";
import CoolLogo from "public/assets/cool_logo_1000x1000.png";
import { EventObject, getAllEvents } from "src/api/EventsAPI";

const IndexPage: React.FC<{ events: Array<EventObject> }> = ({ events }) => (
  <>
    <SEO
      title="ACM at UCSD"
      path="/"
      description="Join us. ACM at UCSD is an inclusive community of students passionate about technology. 1000+ UCSD members. 120+ annual events. 850+ cups of boba served."
      image={CoolLogo.src}
    />
    <HomeHero />
    <HomeJoinUs />
    <HomeEvents events={events} />
    <HomeCommunities />
  </>
);

export default IndexPage;

export async function getStaticProps() {
  const events = await getAllEvents("future");

  return {
    props: {
      events: events || [],
    },
    revalidate: 1 * 60 * 60, // once every hour (in seconds)
  };
}
