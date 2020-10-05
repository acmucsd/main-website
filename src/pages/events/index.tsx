import React, { useState } from 'react';
import { EventsArray, EventObject, getAllEvents } from '../../api/EventsAPI';
import { isURL, getAbsoluteURL, getDateTime } from '../../utils';

import './style.less';

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventsArray>();
  const [dragging, toggleDragging] = useState(false);

  const updateEvents = async (): Promise<void> => {
    const eventsArray: EventsArray | undefined = await getAllEvents();
    if (eventsArray === undefined) {
      setEvents(new Array<EventObject>());
    }
    setEvents(eventsArray);
  };

  React.useEffect(() => {
    if (!events) {
      updateEvents();
    }
  }, [events]);

  const handleMove = (e: any) => {
    if (!dragging) {
      return;
    }
    const em = parseFloat(
      window.getComputedStyle(document.getElementsByClassName('events-container')[0]).fontSize,
    );
    const isTouch = e.movementX === '';
    let deltaX = 0;
    if (isTouch) {
      deltaX = e.touches[0].clientX;
    } else {
      e.preventDefault();
      deltaX = -1 * e.movementX;
    }
    const firstEvent = document.getElementsByClassName('event')[0] as HTMLElement;
    const cardWidth = em * 20;
    const minMargin = events ? em - events.length * 20 * em : cardWidth;
    const oldmargin = parseFloat(window.getComputedStyle(firstEvent).marginLeft);
    const newmargin = oldmargin - deltaX;
    if (newmargin >= minMargin && newmargin <= em) {
      firstEvent.style.marginLeft = `${oldmargin - deltaX}px`;
    }
  };

  const handleMoveStart = () => {
    toggleDragging(true);
  };

  const handleMoveEnd = () => {
    toggleDragging(false);
  };

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
          onTouchStart={handleMoveStart}
          onTouchMove={handleMove}
          onTouchCancel={handleMoveEnd}
          onTouchEnd={handleMoveEnd}
          onDragStart={() => false}
          role="menuitem"
          tabIndex={0}
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
