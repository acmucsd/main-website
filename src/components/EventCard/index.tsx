import Link from "next/link";
import { EventObject, saveToGoogleCal } from "src/api/EventsAPI";
import { formatURLEventTitle } from "src/utils";
import s from "./EventCard.module.scss";
import { days, months, getDateTime } from "src/utils";

const EventCard: React.FC<{
  event: EventObject;
}> = ({ event }) => {
  const month = months[new Date(event.start).getMonth()];
  const date = new Date(event.start).getDate();
  const day = days[new Date(event.start).getDay()];
  const time = getDateTime(event).time;
  const { committee, uuid, title, location, facebookUrl } = event;
  return (
    <Link href={`/events/${formatURLEventTitle(title)}-${uuid}`} passHref>
      <div className={s.card}>
        <div className={s.cardHeader}>
          <h1 className={s.cardDate}>
            <b>{month} </b>
            {date}
          </h1>
          <h2 className={s.cardDay}>{day}</h2>
        </div>
        <div className={s.cardBody}>
          <h3 className={`${s.eventTitle} ${s[committee.toLowerCase()]}`}>{title}</h3>
          <h3 className={s.eventLocation}>{location}</h3>
          <h3 className={s.eventTime}>{time}</h3>
        </div>
        <div className={s.cardFooter}>
          <a
            onClick={e => {
              saveToGoogleCal(event);
              e.stopPropagation();
            }}
          >
            <img
              src="/assets/calendar.svg"
              alt=""
              width={20}
              height={20}
              className={s.footerIcon}
            />
          </a>
          {!facebookUrl ? null : (
            <a href={facebookUrl}>
              <img
                src="/assets/facebook.svg"
                alt=""
                width={20}
                height={20}
                className={s.footerIcon}
              />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
};
export default EventCard;
