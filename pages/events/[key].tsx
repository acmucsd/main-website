import NotFoundPage from "pages/404";
import { EventObject, getAllEvents, getEvent } from "src/api/EventsAPI";
import SEO from "src/components/SEO";
import EventContent from "src/sections/event/Event.Content";
import { formatURLEventTitle, getDateTime } from "src/utils";

const EventPage: React.FC<{ event: EventObject }> = ({ event }) => {
  if (!event) return <NotFoundPage />;
  return (
    <>
      <SEO
        title={event.title}
        path={`${formatURLEventTitle(event.title)}-${event.uuid}`}
        description={`${event.location} - ${getDateTime(event).time}\n\nEvent Description: ${
          event.description
        }`}
        image={event.cover}
      />
      <EventContent event={event} />
    </>
  );
};

export default EventPage;

// Only render dynamic paths for actual events, don't need a fallback to generate if the link is wrong
export async function getStaticPaths() {
  const events = await getAllEvents("future");
  return {
    paths: events.map(event => ({
      params: {
        key: `${formatURLEventTitle(event.title)}-${event.uuid}`,
      },
    })),
    fallback: "blocking",
  };
}

// UUID is always 36 characters long at the end of the url, use this to go to correct event details
const UUID_LEN = 36;
export async function getStaticProps({ params }) {
  const key = params.key;
  const uuid = key.slice(-UUID_LEN);
  const event = await getEvent(uuid);
  return {
    props: {
      event,
    },
  };
}
