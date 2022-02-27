import s from "src/styles/modules/Events.module.scss";

const EventCard: React.FC<{
  month: string;
  date: number;
  day: string;
  org: string;
  title: string;
  location: string;
  time: string;
  facebookUrl: string;
}> = ({ month, date, day, title, org, location, time, facebookUrl }) => (
  <div className={s.card}>
    <div className={s.cardHeader}>
      <h1 className={s.cardDate}>
        <b>{month} </b>
        {date}
      </h1>
      <h2 className={s.cardDay}>{day}</h2>
    </div>
    <div className={s.cardBody}>
      <h3 className={`${s.eventTitle} ${s[org.toLowerCase()]}`}>{title}</h3>
      <h3 className={s.eventLocation}>{location}</h3>
      <h3 className={s.eventTime}>{time}</h3>
    </div>
    <div className={s.cardFooter}>
      <a href={facebookUrl}>
        <img src="/assets/facebook.svg" alt="" width={20} height={20} className={s.footerIcon} />
      </a>
    </div>
  </div>
);
export default EventCard;
