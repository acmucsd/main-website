export type EventsResponse = {
  error: any
  events: EventsArray
}

export type EventsArray = EventObject[]

export type EventObject = {
  uuid: String
  organization: String
  committee: String
  cover: String
  title: String
  description: String
  location: String
  eventLink: String
  start: String
  end: String
  pointValue: Number
  requiresStaff: Boolean
  staffPointBonus: Number
}

const getAllEvents = async (): Promise<EventsArray | undefined> => {
  try {
    const response: Response = await fetch('https://acmucsd-membership-portal-api.herokuapp.com/api/v1/event');
    const result: EventsResponse = await handleErrors(response);
    if (result.error === null) {
      throw new Error();
    }
    return result.events.reverse();
  } catch (error) {
    return undefined;
  }
}

const handleErrors = (response: Response): Promise<any> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export { getAllEvents };