import * as eventService from '../../services/eventServices'
import { CREATE_EVENT, EventActionTypes, RECEIVE_EVENTS, Events, EventsFromServer } from './types'
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

export const createEventAction = (eventData: EventData): EventActionTypes => {
  return {
    type: CREATE_EVENT,
    payload: eventData
  }
}

export const handleCreateEvent = (formData: FormData): AppThunk => async (dispatch, getState) => {
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
    console.log(err)
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
