import { EventsArray } from "src/api/EventsAPI";
import EventCard from "src/components/EventCard";
import s from "./Events.module.scss";
import { days, months, getDateTime } from "src/utils";
import { useEffect, useState } from "react";

const EventsContent: React.FC<{ events: EventsArray }> = ({ events }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(events);

  useEffect(() => {
    setVisibleEvents(
      events.filter(event => {
        if (activeFilter == "all") return true;
        else {
          return event.committee.toLowerCase() == activeFilter;
        }
      })
    );
  }, [activeFilter, events]);

  return (
    <div className={s.eventsContainer}>
      <div className={s.header}>
        <h1 className={s.headerText}>Events</h1>
        <div className={s.filterContainer}>
          <button
            onClick={() => {
              if (activeFilter == "general") setActiveFilter("all");
              else setActiveFilter("general");
            }}
            className={`${s.filterButton} ${s.general} ${activeFilter == "general" && s.active}`}
          >
            General
          </button>
          <button
            onClick={() => {
              if (activeFilter == "hack") setActiveFilter("all");
              else setActiveFilter("hack");
            }}
            className={`${s.filterButton} ${s.hack} ${activeFilter == "hack" && s.active}`}
          >
            Hack
          </button>
          <button
            onClick={() => {
              if (activeFilter == "cyber") setActiveFilter("all");
              else setActiveFilter("cyber");
            }}
            className={`${s.filterButton} ${s.cyber} ${activeFilter == "cyber" && s.active}`}
          >
            Cyber
          </button>
          <button
            onClick={() => {
              if (activeFilter == "innovate") setActiveFilter("all");
              else setActiveFilter("innovate");
            }}
            className={`${s.filterButton} ${s.innovate} ${activeFilter == "innovate" && s.active}`}
          >
            Innovate
          </button>
          <button
            onClick={() => {
              if (activeFilter == "ai") setActiveFilter("all");
              else setActiveFilter("ai");
            }}
            className={`${s.filterButton} ${s.ai} ${activeFilter == "ai" && s.active}`}
          >
            AI
          </button>
        </div>
        <div className={s.mobileFilters}>
          <select name="" id="">
            <option value="all">All</option>
            <option value="general">General</option>
            <option value="innovate">Innovate</option>
            <option value="hack">Hack</option>
            <option value="ai">AI</option>
            <option value="cyber">Cyber</option>
          </select>
        </div>
      </div>
      <div className={s.cardContainer}>
        {visibleEvents.map((event, key) => (
          <EventCard
            key={key}
            month={months[new Date(event.start).getMonth()]}
            date={new Date(event.start).getDate()}
            day={days[new Date(event.start).getDay()]}
            org={event.committee}
            uuid={event.uuid}
            title={event.title}
            location={event.location}
            time={getDateTime(event).time}
            facebookUrl={null} // TODO: Facebook url is not currently passed in from API
          />
        ))}
      </div>
      {visibleEvents.length !== 0 ? null : <div className={s.noEvents}>No Events :(</div>}
    </div>
  );
};

export default EventsContent;
