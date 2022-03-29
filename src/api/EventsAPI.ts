import * as ics from "ics";
import { formatURLEventTitle } from "src/utils/general";
const EVENT_API = "https://api.acmucsd.com/api/v2/event";

export type EventObject = {
  uuid: string;
  organization: string;
  committee: string;
  cover: string;
  title: string;
  description: string;
  location: string;
  eventLink?: string;
  start: string;
  end: string;
  pointValue: number;
  requiresStaff: boolean;
  staffPointBonus: number;
};

export type EventsArray = EventObject[];

export type EventsResponse = {
  error: unknown;
  events: EventsArray;
};

export type EventResponse = {
  error: unknown;
  event: EventObject;
};

const handleErrors = (response: Response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

const getAllEvents = async (
  type: "past" | "future" | "" = ""
): Promise<EventsArray | undefined> => {
  const api_url = `${EVENT_API}/${type}`;

  try {
    const response: Response = await fetch(api_url);
    const result: EventsResponse = await handleErrors(response);
    return result.events;
  } catch (error) {
    return undefined;
  }
};

const getEvent = async (uuid: string): Promise<EventObject | undefined> => {
  let api_url = `${EVENT_API}/${uuid}`;

  try {
    const response: any = await fetch(api_url);
    const result: EventResponse = await handleErrors(response);
    return result.event;
  } catch (error) {
    return undefined;
  }
};

// Referencing this answer to save text in a file and download it
// https://stackoverflow.com/questions/44656610/download-a-string-as-txt-file-in-react
const createDownloadFile = (textContent: string, title: string): void => {
  const element = document.createElement("a");
  const file = new Blob([textContent], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = `${title}.ics`;
  document.body.appendChild(element);
  element.click();
};

const downloadICS = (event: EventObject): void => {
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);
  const duration = endDate.getTime() - startDate.getTime();

  const attributes: ics.EventAttributes = {
    start: [
      startDate.getFullYear(),
      startDate.getMonth() + 1, // Library is 1-indexed rather than 0-indexed
      startDate.getDate(),
      startDate.getHours(),
      startDate.getMinutes(),
    ],
    duration: { minutes: duration / (1000 * 60) },
    title: event.title,
    description: event.description,
    location: event.location,
    url: `https://acmucsd.com/events/${formatURLEventTitle(event.title)}-${event.uuid}`,
    organizer: { name: "ACM at UCSD", email: "acm@ucsd.edu" },
  };

  const response = ics.createEvent(attributes);

  createDownloadFile(response.value, formatURLEventTitle(event.title));
};

// Referencing this link format - no official API documentation exists
// https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md
const saveToGoogleCal = ({ title, description, location, start, end }: EventObject): void => {
  const url = new URL("https://www.google.com/calendar/render?action=TEMPLATE");
  const params = new URLSearchParams(url.search);
  params.append("text", title);
  params.append("details", description);
  params.append("location", location);
  const startISO = start.replaceAll("-", "").replaceAll(":", "").replaceAll(".", "");
  const endISO = end.replaceAll("-", "").replaceAll(":", "").replaceAll(".", "");
  params.append("dates", `${startISO}/${endISO}`);

  const GCAL_LINK = `${url.origin}${url.pathname}?${params.toString()}`;
  window.open(GCAL_LINK);
};

export { getEvent, getAllEvents, downloadICS, saveToGoogleCal };
