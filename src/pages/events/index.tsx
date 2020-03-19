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
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        <p>ACM hosts a wide range of events to provide for the unique array of talent and interests of student members.</p>
      </div>
      <div className="scrollmenu">
        <div className="event">
          <h2><b className="month">Sept</b> 30</h2>
          <h1>ACM x Career Center Resume Workshop</h1>
          <h3>Fung Auditorium</h3>
          <h3>10:00am - 11am</h3>
        </div>
      </div>
    </div>
  );
}

export default Events;