import * as eventService from '../../services/eventServices'
import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_ERROR,
  RECEIVE_EVENTS_SUCCESS,
  RECEIVE_EVENTS_REQUEST, RECEIVE_EVENTS_ERROR,
  SELECT_EVENT_REQUEST,
  SELECT_EVENT_SUCCESS,
  SELECT_EVENT_ERROR,
  Events,
  EventActionTypes,
  EventsFromServer
} from './types'
import { EventInput } from '../../services/eventServicesTypes'
import { formatEvent, formatFormData } from '../../services/formServices'
import { FormData } from '../../services/formServicesTypes'
import { EventData, AppThunk } from '../types'
import { handleCreateSubject } from '../subjects/subjectActions'
import { setLocalStorage } from '../../utils/authDataRepository'

// CREATE EVENT ACTION CREATORS
export const createEventRequest = (): EventActionTypes => {
  return {
    type: CREATE_EVENT_REQUEST
  }
}

export const createEventSuccess = (eventData: EventData): EventActionTypes => {
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

    dispatch(createEventSuccess(eventData))

  } catch (err) {
    dispatch(createEventError(err.message))
  }
}

// SELECT EVENT ACTION CREATORS
export const selectEventRequest = (): EventActionTypes => {
  return {
    type: SELECT_EVENT_REQUEST
  }
}

export const selectEventSuccess = (event: EventData): EventActionTypes => {
  return {
    type: SELECT_EVENT_SUCCESS,
    payload: event
  }
}

export const selectEventError = (error: string): EventActionTypes => {
  return {
    type: SELECT_EVENT_ERROR,
    error
  }
}

export const handleSelectEvent = (eventId: string): AppThunk => async (dispatch) => {
  dispatch(selectEventRequest())

  try {
    const eventData: EventData = await eventService.getEvent(eventId)

    setLocalStorage('formData', formatFormData(eventData))
    console.log(formatFormData(eventData))
    dispatch(selectEventSuccess(eventData))

  } catch (err) {
    dispatch(selectEventError(err.message))
  }
}

// RECEIVE EVENTS ACTION CREATORS
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
