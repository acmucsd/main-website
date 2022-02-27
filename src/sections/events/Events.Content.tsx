import { EventsArray } from "src/api/EventsAPI";
import EventCard from "src/components/EventCard";
import s from "src/styles/modules/Events.module.scss";
import { days, months, getDateTime } from "src/utils";

const EventsContent: React.FC<{ events: EventsArray }> = ({ events }) => {
  console.log(events);
  return (
    <div className={s.eventsContainer}>
      {/* <div className={s.header}>
                  <h1 className={s.headerText}>Events</h1>
                  <div className={s.filterContainer}>
                    <button className={`${s.filterButton} ${s.general}`}>General</button>
                    <button className={`${s.filterButton} ${s.hack}`}>Hack</button>
                    <button className={`${s.filterButton} ${s.cyber}`}>Cyber</button>
                    <button className={`${s.filterButton} ${s.innovate}`}>Innovate</button>
                    <button className={`${s.filterButton} ${s.ai}`}>AI</button>
                  </div>
                </div> */}
      <div className={s.cardContainer}>
        {events.map((event, key) => (
          <EventCard
            key={key}
            month={months[new Date(event.start).getMonth()]}
            date={new Date(event.start).getDate()}
            day={days[new Date(event.start).getDay()]}
            title={event.title}
            location={event.location}
            time={getDateTime(event).time}
            facebookUrl={"https://facebook.com"}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsContent;
