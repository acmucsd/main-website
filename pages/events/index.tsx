import { EventsArray, getAllEvents } from "src/api/EventsAPI";
import SEO from "src/components/SEO";
import Head from "next/head";
import EventsContent from "src/sections/events/Events.Content";

const EventsPage: React.FC<{ futureEvents: EventsArray }> = ({ futureEvents }) => {
  return (
    <>
      <SEO title="Events | ACM at UCSD" path="/events" />
      <EventsContent events={futureEvents} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const futureEvents = await getAllEvents("past");
  return {
    props: {
      futureEvents: futureEvents || [],
    },
    revalidate: 1 * 60 * 60,
  };
}
