import { CREATE_TASK, ICreateTaskAction } from '../actions/types'

export default function events(state = {}, action: ICreateTaskAction) {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
