import Link from "next/link";
import { EventObject } from "src/api/EventsAPI";
import { isURL, getAbsoluteURL, getDateTime } from "src/utils/general";
import LeftArrow from "public/assets/left-arrow.svg";
import RightArrow from "public/assets/right-arrow.svg"; 
import { useState, useRef } from "react";


const HomeEvents: React.FC<{ events: Array<EventObject> }> = ({ events }) => {
  let scroll = useRef(null);
  const maxPage = Math.ceil(events.length / 3 - 1);
  const [scrollStart, setscrollStart] = useState(0); // Detect start scroll pos.
  const [scrollEnd, setscrollEnd] = useState(false); // Detetc end scroll pos.

  const slide = (shift) => {
    scroll.current.scrollLeft += shift;
    setscrollStart(scrollStart + shift); // Updates latest scroll pos.

    // Check if scroll is in end pos.
    if (
      Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= 
      scroll.current.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  return (
    <section className="home__events">
      <div className="home__events__grid">
        <div className="home__events__grid__header">
          <h1>Events</h1>
          <p>ACM Chapter at UCSD hosts 120+ events for our diverse array of students.</p>
        </div>
      </div>
      <div className="column__events__grid">
        <div className="home__events__grid__leftArrow">
          {events.length === 0 ? null : (
            <img
            src={LeftArrow.src}
            alt="left arrow"
            onClick={() => slide(-50)}
            />
          )}      
        </div>
        <div className="home__events__grid__container" tabIndex={0}>

        {events && events.length > 0 ? (
          events.map((value, index) => {
            const timing = getDateTime(value);
            return (
              <div className="home__events__grid__container__event" key={index}>
                <img src={value.cover} alt={value.title} />
                <h2>
                  <span>{timing.date}</span>
                  {timing.time}
                </h2>
                {isURL(value.location.trim()) ? (
                  <a className="link" href={getAbsoluteURL(value.location.trim())}>
                    <h3>{value.location}</h3>
                  </a>
                ) : (
                  <h3>{value.location}</h3>
                )}
              </div>
            );
          })
        ) : (
          <div className="home__events__grid__container__event--default">
            <p>
              No events this week. <br /> Check back later!
            </p>
          </div>
        )}
        <div aria-hidden="true" className="event end" />
        </div>
        <div className="home__events__grid__rightArrow">
          {events.length === maxPage ? null : (
            <img
              src={RightArrow.src}
              alt="right arrow"
              onClick={() => slide(+50)}
            />
          )}      
        </div>
      </div>
      <Link href="/events">
        <a className="home__events__see-all">See All Events &gt;</a>
      </Link>
    </section>
  );
};

export default HomeEvents;
