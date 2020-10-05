import React, {useState} from 'react';

import { EventsArray, EventObject, getAllEvents } from '../../api/EventsAPI';
import { isURL, getAbsoluteURL, getDateTime } from '../../utils';

import './style.less';

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventsArray>();
  const [dragging, toggleDragging] = useState(false);
  let em = 16;

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
    em = parseFloat(window.getComputedStyle(document.getElementsByClassName('events-container')[0]).fontSize);
  }, []);

  const handleMove = (e:any) => {
    console.log('fired');
    e.preventDefault();
    if (!dragging) {
      return;
    }
    let deltaX = e.movementX;
    let firstEvent = document.getElementsByClassName('event')[0] as HTMLElement;
    const cardWidth = em*20;
    const minMargin = events ? em-(events.length*20*em) : cardWidth;
    const oldmargin = parseFloat(window.getComputedStyle(firstEvent).marginLeft);
    const newmargin = oldmargin - deltaX;
    if (newmargin >= minMargin && newmargin <= em) {
      firstEvent.style.marginLeft = `${oldmargin - deltaX}px`;
    }
  }

  const handleMoveStart = (e:any) => {
    toggleDragging(true);
  }

  const handleMoveEnd = (e:any) => {
    toggleDragging(false);
  }

  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events</h1>
        <p>
          ACM hosts a wide range of events to provide for the unique array of talent and interests
          of student members.
        </p>
      </div>
      <div className="events-container">
        <div 
          className="events" 
          onMouseDown={handleMoveStart}
          onMouseMove={handleMove}
          onMouseUp={handleMoveEnd}
          onMouseLeave={handleMoveEnd}
          onDragStart={() => {return false}}
        >
          {events &&
            events.map((value, index) => {
              const timing = getDateTime(value);
              return (
                <div className="event" key={index}>
                  <h2>{timing.date}</h2>
                  <h1 className={`index${index % 5}`}>{value.title}</h1>
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
          <div aria-hidden="true" className="event end" />
        </div>
      </div>
    </div>
  );
};

export default Events;
