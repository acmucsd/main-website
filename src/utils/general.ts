import { useState, useEffect } from "react";
import { EventObject } from "src/api/EventsAPI";

/**
 * Determines if given string is a valid website link.
 * @param {string} str The string containing a potential URL.
 * @return {boolean} True if valid URL, false otherwise.
 */
export const isURL = (str: string | undefined): boolean => {
  if (!str) {
    return false;
  }

  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );

  return pattern.test(str);
};

/**
 * Ensures a valid website link is an absolute path.
 * @param {string} str The string containing a URL.
 * @return {string} A guaranteed absolute path for the link.
 */
export const getAbsoluteURL = (str: string): string | undefined => {
  if (!str) {
    return undefined;
  }

  if (isURL(str) && !/^https?:\/\//i.test(str)) {
    return `http://${str}`;
  }

  return str;
};

export const formatURLEventTitle = (title: string): string => {
  return title.toLowerCase().trim().replace(/ /g, "-");
};
/**
 * Contains timing information for an event.
 * @param {string} date The date description.
 * * @param {string} time The time description.
 */
export type EventTime = {
  date: string;
  time: string;
};

/**
 * Converts an event's date information into human readable descriptions.
 * @param {EventObject} event The event to be processed.
 * @return {EventTime} English strings describing date and time.
 */
export const getDateTime = (event: EventObject): EventTime => {
  const startDate = new Date(event.start);
  const endDate = new Date(event.end);
  const result: EventTime = { date: "", time: "" };

  if (startDate.getDate() !== endDate.getDate()) {
    result.date = `${startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: 'America/Los_Angeles'
    })} - ${endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: 'America/Los_Angeles'
    })}`;
  } else {
    result.date = startDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      timeZone: 'America/Los_Angeles'
    });
  }

  result.time = `${startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: 'America/Los_Angeles'
  })} - ${endDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: 'America/Los_Angeles'
  })}`;

  return result;
};

// Define general type for useWindowSize hook, which includes width and height
export interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
