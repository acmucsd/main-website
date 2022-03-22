import { getAllEvents, getEvent } from "src/api/EventsAPI";
import EventContent from "src/sections/event/Event.Content";
import { formatURLEventTitle } from "src/utils";

const EventPage = ({ event }) => {
  return <EventContent event={event} />;
};

export default EventPage;

// Only render dynamic paths for actual events, don't need a fallback to generate if the link is wrong
export async function getStaticPaths() {
  const events = await getAllEvents();
  return {
    paths: events.map(event => {
      return {
        params: {
          key: `${formatURLEventTitle(event.title)}-${event.uuid}`,
        },
      };
    }),
    fallback: false,
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
