import * as eventService from '../../services/eventServices'
import { CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR, EventActionTypes, RECEIVE_EVENTS_SUCCESS, Events, EventsFromServer, RECEIVE_EVENTS_REQUEST, RECEIVE_EVENTS_ERROR } from './types'
import { EventInput } from '../../services/eventServicesTypes'
import { formatEvent } from '../../services/formServices'
import { FormData } from '../../services/formServicesTypes'
import { EventData, AppThunk } from '../types'
import { handleCreateSubject } from '../subjects/subjectActions'

// Create Event Action Creators
export const createEventRequest = (): EventActionTypes => {
  return {
    type: CREATE_EVENT_REQUEST
  }
}

export const createEventAction = (eventData: EventData): EventActionTypes => {
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: eventData
  }
}

export const createEventError = (error: string): EventActionTypes => {
  return {
    type: CREATE_EVENT_ERROR,
    error
  }
}

export const handleCreateEvent = (formData: FormData): AppThunk => async (dispatch, getState) => {
  dispatch(createEventRequest())

  try {
    await dispatch(handleCreateSubject({
      name: formData.subjectName,
      imageUrl: formData.imageUrl
      })
    )

    const { user, subject } = getState()
    const subjectId: string = subject[subject.length - 1].id
    let hostEmail: string = ''
    if (user.isLoggedIn) {
      hostEmail = user.user.email
    }
    
    const eventInput: EventInput = formatEvent(formData, subjectId, hostEmail)

    const eventId: string = await eventService.createEvent(eventInput)
    const eventData: EventData = await eventService.getEvent(eventId)

    dispatch(createEventAction(eventData))

  } catch (err) {
    dispatch(createEventError(err.message))
  }
}

// Receive Events action creators
export const receiveEventsRequest = (): EventActionTypes => {
  return {
    type: RECEIVE_EVENTS_REQUEST
  }
}

export const receiveEventsAction = (events: Events): EventActionTypes => {
  return {
    type: RECEIVE_EVENTS_SUCCESS,
    payload: events
  }
}

export const receiveEventsError = (error: string): EventActionTypes => {
  return {
    type: RECEIVE_EVENTS_ERROR,
    error
  }
}

export const handleGetEvents = (): AppThunk => async (dispatch, getState) => {
  dispatch(receiveEventsRequest())

  try {
    const { user } = getState()
    let userId = ''
    if (user.isLoggedIn) {
      userId = user.user.id
    }
    const events: EventsFromServer = await eventService.getEvents(userId)
    dispatch(receiveEventsAction(events.items))

  } catch (err) {
    dispatch(receiveEventsError(err.message))
  }
}
