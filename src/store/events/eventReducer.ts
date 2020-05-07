import { CREATE_EVENT, EventActionTypes, EventState } from './types'

const initialEventState: EventState = []

export default function eventReducer(
  state = initialEventState,
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
