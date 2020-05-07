export const CREATE_EVENT: string = 'CREATE_EVENT'

// ACTION TYPES
interface CreateEventAction {
  type: typeof CREATE_EVENT
  eventId: string
}

export type EventActionTypes = CreateEventAction 

//  STATE TYPE
export type EventState = string[] | []