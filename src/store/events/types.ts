import { TaskActionTypes } from '../tasks/types'
import { SubjectActionTypes } from '../subjects/types'

export const CREATE_EVENT: string = 'CREATE_EVENT'

// ACTION TYPES
interface CreateEventAction {
  type: typeof CREATE_EVENT
  eventId: string
}

export type EventActionTypes = CreateEventAction 

export type MultipleActionTypes = EventActionTypes | TaskActionTypes | SubjectActionTypes
//  STATE TYPE
export type EventState = string[] | []