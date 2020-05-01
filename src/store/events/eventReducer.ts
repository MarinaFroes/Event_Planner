import { CREATE_EVENT, EventActionTypes } from './types'

export default function events(state = [], action: EventActionTypes) {
  switch (action.type) {
    case CREATE_EVENT:
      return [
        ...state,
        action.eventId
      ]
    default:
      return state
  }
}
