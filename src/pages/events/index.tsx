import React from 'react'

import {EventsArray, EventObject, getAllEvents} from '../../api/EventsAPI';

import './style.less';

const Events: React.FC = () => {
  const [events, setEvents] = React.useState<EventsArray | undefined>();
  const [fetchFailed, setFetchFailed] = React.useState<Boolean>(false);

  React.useEffect(() => {
    if (!events) {
      updateEvents();
    }
  }, []);

  const updateEvents = async () => {
    const eventsArray: EventsArray | undefined = await getAllEvents();
    if (eventsArray === undefined) {
      setFetchFailed(true);
      setEvents(new Array<EventObject>());
    }
    setEvents(eventsArray);
  }

  return (
    <div className="events-header">
      <h1>Events</h1>
      <p>ACM hosts a wide range of events to provide for the unique array of talent and interests of student members.</p>
    </div>
  );
}

export default Events;