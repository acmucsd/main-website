import { EventObject } from './api/EventsAPI';

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
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );

  return !!pattern.test(str);
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
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const startDate = new Date(event.start);
  const endDate = new Date(event.end);
  const result: EventTime = { date: '', time: '' };

  if (startDate.getDate() !== endDate.getDate()) {
    result.date = `${months[startDate.getMonth()]} ${startDate.getDate()} - 
    ${months[endDate.getMonth()]} ${endDate.getDate()}`;
  } else {
    result.date = `${months[startDate.getMonth()]} ${startDate.getDate()}`;
  }

  const processPeriod = (h: number): string => (h < 12 || h === 24 ? 'am' : 'pm');

  const processTime = (h: number, m: number): string => {
    let time = '';

    if (h === 0 || h === 24) {
      time = '12';
    } else if (h < 13) {
      time = h.toString();
    } else if (h < 24) {
      time = (h % 12).toString();
    }

    time += m > 9 ? `:${m}` : `:0${m}`;

    time += processPeriod(h);

    return time;
  };

  result.time = `${processTime(startDate.getHours(), startDate.getMinutes())} - 
  ${processTime(endDate.getHours(), endDate.getMinutes())}`;

  return result;
};
