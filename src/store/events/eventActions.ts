import * as eventService from '../../services/eventServices'
import { CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR, EventActionTypes, RECEIVE_EVENTS, Events, EventsFromServer } from './types'
import { EventInput } from '../../services/eventServicesTypes'
import { formatEvent } from '../../services/formServices'
import { FormData } from '../../services/formServicesTypes'
import { EventData, AppThunk } from '../types'
import { handleCreateSubject } from '../subjects/subjectActions'

export const receiveEventsAction = (events: Events): EventActionTypes => {
  return {
    type: RECEIVE_EVENTS,
    payload: events
  }
}

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
    console.log(err.message)
    dispatch(createEventError(err.message))
  }
}

export const handleGetEvents = (): AppThunk => async (dispatch, getState) => {
  try {
    const { user } = getState()
    let userId = ''
    if (user.isLoggedIn) {
      userId = user.user.id
    }
    const events: EventsFromServer = await eventService.getEvents(userId)
        
    dispatch(receiveEventsAction(events.items))
  } catch (err) {
    console.log(err)
  }
}
