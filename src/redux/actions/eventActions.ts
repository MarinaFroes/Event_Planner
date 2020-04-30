import { ICreateEventAction, CREATE_EVENT, IEvent } from './types'

export const createEventAction = (event: IEvent): ICreateEventAction => {
  return {
    type: CREATE_EVENT,
    payload: {
      ...event
    }
  }
}

