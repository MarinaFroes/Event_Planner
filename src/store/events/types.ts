import { EventData } from '../types'

export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR'

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

// OTHER TYPES
export type Events = EventData[]

export interface EventsFromServer {
  items: Events;
  [propName: string]: any;
}

// ACTION TYPES
// CREATE EVENT ACTIONS
export interface CreateEventRequest {
  type: typeof CREATE_EVENT_REQUEST
}

export interface CreateEventAction {
  type: typeof CREATE_EVENT_SUCCESS
  payload: EventData
}

export interface CreateEventError {
  type: typeof CREATE_EVENT_ERROR
  error: string
}

// RECEIVE EVENT ACTIONS
export interface ReceiveEventsAction {
  type: typeof RECEIVE_EVENTS
  payload: Events
}


export type EventActionTypes = CreateEventRequest | CreateEventAction | CreateEventError | ReceiveEventsAction 

//  STATE TYPE
export type EventState = EventData[]