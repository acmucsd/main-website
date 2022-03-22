import { getAllEvents, getEvent } from "src/api/EventsAPI";
import EventContent from "src/sections/event/Event.Content";

const EventPage = ({ uuid, event }) => {
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
          key: event.uuid,
        },
      };
    }),
    fallback: false,
  };
}

// UUID is always 36 characters long, use this to go to correct event details
export async function getStaticProps({ params }) {
  const key = params.key;
  const uuid = key.slice(-36);
  const event = await getEvent(uuid);
  return {
    props: {
      event,
    },
  };
}
