import { CREATE_EVENT, EventActionTypes, EventState, RECEIVE_EVENTS } from './types'

const initialEventState: EventState = []

export default function eventReducer(
  state = initialEventState,
  action: EventActionTypes
): EventState {
  switch (action.type) {
    case CREATE_EVENT:
      let eventData = action.payload
      return [
        ...state,
        eventData
      ]
    case RECEIVE_EVENTS:
      let events = action.payload
      return [
        ...state,
        ...events
      ]
    default:
      return state
  }
}