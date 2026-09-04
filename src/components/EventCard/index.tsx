import Link from "next/link";
import { saveToAppleCal, EventObject, saveToGoogleCal } from "src/api/EventsAPI";
import { useState } from "react";
import { CalendarModal } from "../CalendarModal";
import { ShareToModal } from "../ShareToModal";
import s from "./EventCard.module.scss";
import { days, months, formatURLEventTitle, getDateTime, withHttp } from "src/utils/general";
import {  FaCalendarAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { GRAY } from "src/utils/constants";

const EventCard: React.FC<{
  event: EventObject;
}> = ({ event }) => {
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const month = months[new Date(event.start).getMonth()];
  const date = new Date(event.start).getDate();
  const day = days[new Date(event.start).getDay()];
  const time = getDateTime(event).time;
  const { committee, uuid, title, location, eventLink } = event;
  return (
    <>
      <CalendarModal show={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} event={event} />
      <ShareToModal show={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} event={event} />
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
                setIsCalModalOpen(true);
                e.stopPropagation();
              }}
            >
              <FaCalendarAlt color={GRAY} size={25} />
            </a>
            <a
              onClick={e => {
                setIsShareModalOpen(true);
                e.stopPropagation();
              }}
            >
              <FaShareAlt color={GRAY} size={25} />
            </a>
          </div>
        </div>
      </Link>
    </>
  );
};
export default EventCard;
