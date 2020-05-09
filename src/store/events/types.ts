import { TaskActionTypes } from '../tasks/types'
import { SubjectActionTypes } from '../subjects/types'
import { EventData } from '../types'

export const CREATE_EVENT: string = 'CREATE_EVENT'
export const GET_EVENTS: string = 'GET_EVENTS'

// OTHER TYPES
export interface Events {
  [eventId: string]: EventData
}

// ACTION TYPES
interface CreateEventAction {
  type: typeof CREATE_EVENT
  eventId: string
}

interface GetEventsAction {
  type: typeof GET_EVENTS
  events: Events
}

export type EventActionTypes = CreateEventAction | GetEventsAction

export type MultipleActionTypes = EventActionTypes | TaskActionTypes | SubjectActionTypes
//  STATE TYPE
export type EventState = string[] | []