export type EventsResponse = {
  error: unknown;
  events: EventsArray;
};

export type EventsArray = EventObject[];

export type EventObject = {
  uuid: string;
  organization: string;
  committee: string;
  cover: string;
  title: string;
  description: string;
  location: string;
  eventLink: string;
  start: string;
  end: string;
  pointValue: number;
  requiresStaff: boolean;
  staffPointBonus: number;
};

const handleErrors = (response: Response): Promise<EventsResponse> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

const getAllEvents = async (): Promise<EventsArray | undefined> => {
  let apiurl = 'https://acmucsd-membership-portal-api.herokuapp.com/api/v1/event';
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiurl = 'https://acmucsd-portal-testing.herokuapp.com/api/v1/event';
  }

  try {
    const response: Response = await fetch(apiurl);
    const result: EventsResponse = await handleErrors(response);
    return result.events.reverse();
  } catch (error) {
    return undefined;
  }
};

export { getAllEvents };
