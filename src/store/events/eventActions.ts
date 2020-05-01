import { ThunkAction } from 'redux-thunk'
import * as eventService from '../../services/eventServices'

import { CREATE_EVENT, EventActionTypes, EventState } from './types'
import { EventInput } from '../../services/eventServicesTypes'


export const createEventAction = (eventId: string) => {
  return {
    type: CREATE_EVENT,
    eventId
  }
}


type Effect = ThunkAction<any, EventState, any, EventActionTypes>;

export const handleCreateEvent = (eventInput: EventInput): Effect => (dispatch) => {
  return eventService.createEvent(eventInput)
    .then(eventId => eventService.getEvent(eventId))
    .then(eventData => dispatch(createEventAction(eventData.id)))
    .catch(() => new Error("Event was not created"))
}
