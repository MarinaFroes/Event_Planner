import { CREATE_EVENT, EventActionTypes, EventState } from './types'

export default function eventReducer(
  state = [],
  action: EventActionTypes
): EventState {
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
