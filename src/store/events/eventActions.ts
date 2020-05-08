import { ThunkAction } from 'redux-thunk'
import * as eventService from '../../services/eventServices'

import { CREATE_EVENT, EventActionTypes, MultipleActionTypes } from './types'
import { EventInput } from '../../services/eventServicesTypes'
import { formatEvent } from '../../services/formServices'
import { FormData } from '../../services/formServicesTypes'
import { AppState, EventData } from '../types'
import { handleCreateSubject } from '../subjects/subjectActions'

export const createEventAction = (eventId: string): EventActionTypes => {
  return {
    type: CREATE_EVENT,
    eventId
  }
}


type Effect = ThunkAction<void, AppState, unknown, MultipleActionTypes>;

export const handleCreateEvent = (formData: FormData): Effect => async (dispatch, getState) => {
  try {
    await dispatch(handleCreateSubject({
      name: formData.subjectName,
      imageUrl: formData.imageUrl
      })
    )

    const { user, subject } = getState()
    const subjectId: string = subject[0]
    let hostEmail: string = ''
    if (user.isLoggedIn) {
      hostEmail = user.user.email
    }
    
    const eventInput: EventInput = formatEvent(formData, subjectId, hostEmail)
    const eventId: string = await eventService.createEvent(eventInput)
    const eventData: EventData = await eventService.getEvent(eventId)

    dispatch(createEventAction(eventData.id))
  } catch (err) {
    console.log(err)
  }

}
