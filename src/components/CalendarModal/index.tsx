import React from "react";
import { EventObject, saveToAppleCal, saveToGoogleCal } from "src/api/EventsAPI";
import s from "./CalendarModal.module.scss";

interface CalendarModalProps {
  show: boolean;
  event: EventObject;
  onClose: () => void;
}

export const CalendarModal: React.FC<CalendarModalProps> = ({ show, event, onClose }) => (
  <dialog className={s.modal} open={show}>
    <section className={s["modal-main"]}>
      <h3>What type of calendar event would you like?</h3>
      <div className={s.options}>
        <button onClick={() => saveToAppleCal(event)}>Apple Calendar</button>
        <button onClick={() => saveToGoogleCal(event)}>Google Calendar</button>
      </div>
      <br />
      <button onClick={onClose}>Cancel</button>
    </section>
  </dialog>
);
