import { EventsArray, getAllEvents } from "src/api/EventsAPI";
import SEO from "src/components/SEO";
import EventsContent from "src/sections/events/Events.Content";

const EventsPage: React.FC<{ events: EventsArray }> = ({ events }) => {
  return (
    <>
      <SEO title="Events" path="/events" />
      <EventsContent events={events} />
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const eventsData = await getAllEvents();
  return {
    props: {
      events: eventsData || [],
    },
    revalidate: 1 * 60 * 60,
  };
}
