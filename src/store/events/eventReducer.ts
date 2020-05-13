import { EventActionTypes, EventState, RECEIVE_EVENTS_SUCCESS, CREATE_EVENT_SUCCESS } from './types'

const initialEventState: EventState = []

export default function eventReducer(
  state = initialEventState,
  action: EventActionTypes
): EventState {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS:
      let eventData = action.payload
      return [
        ...state,
        eventData
      ]
    case RECEIVE_EVENTS_SUCCESS:
      let events = action.payload
      return [
        ...state,
        ...events
      ]
    default:
      return state
  }
}