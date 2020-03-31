export type EventsResponse = {
  error: any
  events: EventsArray
}

export type EventsArray = EventObject[]

export type EventObject = {
  uuid: string
  organization: string
  committee: string
  cover: string
  title: string
  description: string
  location: string
  eventLink: string
  start: string
  end: string
  pointValue: number
  requiresStaff: boolean
  staffPointBonus: number
}

const getAllEvents = async (): Promise<EventsArray | undefined> => {
  try {
    const response: Response = await fetch('https://acmucsd-membership-portal-api.herokuapp.com/api/v1/event');
    const result: EventsResponse = await handleErrors(response);
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