export const CREATE_EVENT: string = 'CREATE_EVENT'

interface CreateEventAction {
  type: typeof CREATE_EVENT
  eventId: string
}

export type EventActionTypes = CreateEventAction 

export type EventState = string[] | []