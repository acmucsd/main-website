import Link from "next/link";
import { downloadICS, EventObject, saveToGoogleCal } from "src/api/EventsAPI";
import { days, getDateTime, months } from "src/utils/general";
import s from "./Event.module.scss";

const EventContent: React.FC<{ event: EventObject }> = ({ event }) => {
  const month = months[new Date(event.start).getMonth()];
  const date = new Date(event.start).getDate();
  const day = days[(new Date(event.start).getDay() + 6) % 7];
  const time = getDateTime(event).time;
  const { committee, title, location, description, start, end, facebookUrl } = event;

  return (
    <div className={s.container}>
      <div className={s.eventHeader}>
        <Link href={"/events"}>
          <a className={s.backButton}>&lt; Back to Events</a>
        </Link>
        <h3 className={`${s.eventType} ${s[committee.toLowerCase()]}`}>{committee} Event</h3>
      </div>
      <div className={s.eventBody}>
        <img src={event.cover} className={s.eventCover} alt="Event Cover Photo" />
        <div className={s.eventInfo}>
          <div className={s.titleLocationGrid}>
            <div className={s.date}>
              <h2 className={s.eventDate}>
                <b>{month}</b> {date}
              </h2>
              <h2 className={s.eventDay}>{day}</h2>
            </div>
            <h2 className={s.location}>{location}</h2>
            <h2 className={`${s.title} ${s[committee.toLowerCase()]}`}>{title}</h2>
            <h2 className={s.time}>{time}</h2>
          </div>
          <div className={s.eventLinks}>
            <a
              className={s.eventLink}
              onClick={e => {
                e.preventDefault();
                downloadICS(event);
              }}
            >
              <img src="/assets/calendar.svg" alt="Add to Calendar" width={30} height={30} />
              Download Calendar Event
            </a>
            <a
              className={s.eventLink}
              onClick={e => {
                e.preventDefault();
                saveToGoogleCal(event);
              }}
            >
              <img src="/assets/calendar.svg" alt="Add to Calendar" width={30} height={30} />
              Save to Google Calendar
            </a>
          </div>
          <p className={s.eventDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default EventContent;
