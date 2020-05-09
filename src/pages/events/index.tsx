import React from 'react';

import { EventsArray, EventObject, getAllEvents } from '../../api/EventsAPI';
import { isURL, getAbsoluteURL, getDateTime } from '../../utils';

import './style.less';

const Events: React.FC = () => {
  const [events, setEvents] = React.useState<EventsArray>();

  const updateEvents = async (): Promise<void> => {
    const eventsArray: EventsArray | undefined = await getAllEvents();
    if (eventsArray === undefined) {
      setEvents(new Array<EventObject>());
    }
    setEvents(eventsArray?.slice(0, 6));
  };

  React.useEffect(() => {
    if (!events) {
      updateEvents();
    }
  }, []);

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        <p>
          ACM hosts a wide range of events to provide for the unique array of talent and interests
          of student members.
        </p>
      </div>
      <div className="events">
        {events &&
          events.map((value, index) => {
            const timing = getDateTime(value);
            return (
              <div className="event" key={index}>
                <h2>{timing.date}</h2>
                <h1 className={`index${index % 4}`}>{value.title}</h1>
                {isURL(value.location) ? (
                  <a className="link" href={getAbsoluteURL(value.location)}>
                    <h3>{value.location}</h3>
                  </a>
                ) : (
                  <h3>{value.location}</h3>
                )}
                <h3>{timing.time}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Events;
