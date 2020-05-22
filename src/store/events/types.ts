import { EventData } from '../types'

export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR'

export const SELECT_EVENT_REQUEST = 'SELECT_EVENT_REQUEST'
export const SELECT_EVENT_SUCCESS = 'SELECT_EVENT_SUCCESS'
export const SELECT_EVENT_ERROR = 'SELECT_EVENT_ERROR'

export const RECEIVE_EVENTS_REQUEST = 'RECEIVE_EVENTS_REQUEST'
export const RECEIVE_EVENTS_SUCCESS = 'RECEIVE_EVENTS_SUCCESS'
export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENTS_ERROR'

export const SUBSCRIBE_REQUEST = 'SUBSCRIBE_REQUEST'
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS'
export const SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR'

// OTHER TYPES
export type Events = EventData[]

export interface EventsFromServer {
  items: Events;
  [propName: string]: any;
}

// ACTION TYPES
// CREATE EVENT ACTION TYPES
export interface CreateEventRequest {
  type: typeof CREATE_EVENT_REQUEST
}

export interface CreateEventSuccess {
  type: typeof CREATE_EVENT_SUCCESS
  payload: EventData
}

export interface CreateEventError {
  type: typeof CREATE_EVENT_ERROR
  error: string
}

type CreateEventActions = CreateEventRequest | CreateEventSuccess | CreateEventError

// GET SINGLE EVENT ACTION TYPES
export interface SelectEventRequest {
  type: typeof SELECT_EVENT_REQUEST
}

export interface SelectEventSuccess {
  type: typeof SELECT_EVENT_SUCCESS
  payload: EventData
}

export interface SelectEventError {
  type: typeof SELECT_EVENT_ERROR
  error: string
}

type SelectEventActions = SelectEventRequest | SelectEventSuccess | SelectEventError

// RECEIVE EVENT ACTION TYPES
export interface ReceiveEventsRequest {
  type: typeof RECEIVE_EVENTS_REQUEST
}

export interface ReceiveEventsSuccess {
  type: typeof RECEIVE_EVENTS_SUCCESS
  payload: Events
}

export interface ReceiveEventsError {
  type: typeof RECEIVE_EVENTS_ERROR
  error: string
}

type ReceiveEventsActions = ReceiveEventsRequest | ReceiveEventsSuccess | ReceiveEventsError

// SUBSCRIBE TO EVENT ACTION TYPES
export interface SubscribeRequest {
  type: typeof SUBSCRIBE_REQUEST
}

export interface SubscribeSuccess {
  type: typeof SUBSCRIBE_SUCCESS
  payload: EventData
}

export interface SubscribeError {
  type: typeof SUBSCRIBE_ERROR
  error: string
}

type SubscribeActionTypes = SubscribeRequest | SubscribeSuccess | SubscribeError

// ALL EVENT ACTION TYPES 
export type EventActionTypes = CreateEventActions | SelectEventActions | ReceiveEventsActions | SubscribeActionTypes

//  STATE TYPE
export type EventState = {
  selectedEvent: null | EventData;
  eventsList: Events;
}