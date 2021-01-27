import React from 'react';
import FadeIn from '../../components/fadein';
import { EventsArray, EventObject, getAllEvents } from '../../api/EventsAPI';
import { isURL, getAbsoluteURL, getDateTime } from '../../utils';

import './style.less';

/*

NOTE: In case we want to implement a horizontal scroll through events
while the cursor is over the events container, this code (and related
code can be added and fine tuned (currently buggy! ).

let lastScrollTop = 0;

const scrollLeft = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  if (!ref.current) {
    return;
  }

  const currentRef = ref.current;
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const boundingRect = currentRef.getBoundingClientRect();
  const startPosition = boundingRect.top - window.innerHeight;

  if (startPosition < 0 && startPosition >= -window.innerHeight * 2) {
    currentRef.scrollLeft += (st - lastScrollTop) * 0.75;
  }

  lastScrollTop = st <= 0 ? 0 : st;
}; */

const Events: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [events, setEvents] = React.useState<EventsArray>();
  const [dragging, toggleDragging] = React.useState(false);

  /* const handleScroll = () => {
    scrollLeft(sliderRef);
  }; */

  const updateEvents = async (): Promise<void> => {
    const eventsArray: EventsArray | undefined = await getAllEvents();
    if (eventsArray === undefined) {
      setEvents(new Array<EventObject>());
    }
    setEvents(eventsArray);
  };

  /* React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []); */

  React.useEffect(() => {
    if (!events) {
      updateEvents();
    }
  }, [events]);

  const handleMove = (e: any) => {
    // scrollLeft(sliderRef);

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
    <FadeIn>
      <div className="events">
        <div className="header">
          <h1>Events</h1>
          <p>We host 140+ workshops and socials for our members every year.</p>
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
            ref={sliderRef}
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
                    {isURL(value.location.trim()) ? (
                      <a className="link" href={getAbsoluteURL(value.location.trim())}>
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
    </FadeIn>
  );
};

export default Events;
