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

  const filter = (committee: string): void => {
    if (activeFilter == committee) setActiveFilter("all");
    else setActiveFilter(committee);
  };

  return (
    <div className={s.eventsContainer}>
      <div className={s.header}>
        <h1 className={s.headerText}>Events</h1>
        <div className={s.filterContainer}>
          <button
            onClick={() => filter("general")}
            className={`${s.filterButton} ${s.general} ${activeFilter == "general" && s.active}`}
          >
            General
          </button>
          <button
            onClick={() => filter("hack")}
            className={`${s.filterButton} ${s.hack} ${activeFilter == "hack" && s.active}`}
          >
            Hack
          </button>
          <button
            onClick={() => filter("cyber")}
            className={`${s.filterButton} ${s.cyber} ${activeFilter == "cyber" && s.active}`}
          >
            Cyber
          </button>
          <button
            onClick={() => filter("innovate")}
            className={`${s.filterButton} ${s.innovate} ${activeFilter == "innovate" && s.active}`}
          >
            Innovate
          </button>
          <button
            onClick={() => filter("ai")}
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
            facebookUrl={event.facebookUrl}
          />
        ))}
      </div>
      {visibleEvents.length !== 0 ? null : <div className={s.noEvents}>No Events :(</div>}
    </div>
  );
};

export default EventsContent;
