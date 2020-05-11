import { EventData } from '../types'

export const CREATE_EVENT = 'CREATE_EVENT'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

// OTHER TYPES
export type Events = EventData[]

export interface EventsFromServer {
  items: Events;
  [propName: string]: any;
}

// ACTION TYPES
export interface CreateEventAction {
  type: typeof CREATE_EVENT
  payload: EventData
}

export interface ReceiveEventsAction {
  type: typeof RECEIVE_EVENTS
  payload: Events
}

export type EventActionTypes = CreateEventAction | ReceiveEventsAction

//  STATE TYPE
export type EventState = EventData[]