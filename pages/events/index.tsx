import { EventsArray, getAllEvents } from "src/api/EventsAPI";
import SEO from "src/components/SEO";
import EventsContent from "src/sections/events/Events.Content";

const EventsPage: React.FC<{ futureEvents: EventsArray }> = ({ futureEvents }) => {
  return (
    <>
      <SEO title="Events" path="/events" />
      <EventsContent events={futureEvents} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const futureEvents = await getAllEvents("future");
  return {
    props: {
      futureEvents: futureEvents || [],
    },
    revalidate: 1 * 60 * 60,
  };
}
