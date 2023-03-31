import React from "react";
import { EventObject, saveToAppleCal, saveToGoogleCal } from "src/api/EventsAPI";
import s from "./CalendarModal.module.scss";
import GoogleCalendarLogo from "public/assets/googlecalendar.png";
import AppleCalendarLogo from "public/assets/applecalendar.png";

interface CalendarModalProps {
  show: boolean;
  event: EventObject;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ show, event, onClose }) => (
  <dialog className={s.modal} open={show}>
    <section className={s["modal-main"]}>
      <h3>Add Event to Calendar</h3>
      <div className={s.options}>
        <button className={`${s.google} ${s.calendarButton}`} onClick={() => saveToGoogleCal(event)}>
          <img src={GoogleCalendarLogo.src} alt="google calendar" />
          <b>Google Calendar</b>
        </button>
        <button className={`${s.apple} ${s.calendarButton}`} onClick={() => saveToAppleCal(event)}>
          <img src={AppleCalendarLogo.src} alt="apple calendar" />
          <b>Apple Calendar</b>
        </button>
      </div>
      <br />
      <button onClick={onClose}><b>Cancel</b></button>
    </section>
  </dialog>
);
