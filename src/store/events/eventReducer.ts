import { CREATE_EVENT, ICreateEventAction } from '../actions/types'

export default function events(state = {}, action: ICreateEventAction) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
