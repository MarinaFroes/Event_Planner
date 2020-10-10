import {
  EventActionTypes,
  EventState,
  RECEIVE_EVENTS_SUCCESS,
  CREATE_EVENT_SUCCESS,
  SELECT_EVENT_SUCCESS,
  SUBSCRIBE_SUCCESS,
} from '../../types/reduxTypes'

const initialEventState: EventState = {
  selectedEvent: null,
  eventsList: [],
}

export default function eventReducer(
  state = initialEventState,
  action: EventActionTypes
): EventState {
  switch (action.type) {
    case CREATE_EVENT_SUCCESS:
      let eventData = action.payload
      return {
        ...state,
        selectedEvent: eventData,
        eventsList: state.eventsList.concat(eventData),
      }
    case SELECT_EVENT_SUCCESS:
      let selectedEvent = action.payload
      return {
        ...state,
        selectedEvent: selectedEvent,
      }
    case RECEIVE_EVENTS_SUCCESS:
      let events = action.payload
      return {
        ...state,
        selectedEvent: null,
        eventsList: events,
      }
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        selectedEvent: action.payload,
        eventsList: state.eventsList.concat(action.payload),
      }
    default:
      return state
  }
}
