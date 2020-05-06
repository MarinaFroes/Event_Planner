import { CREATE_TASK, TaskActionTypes } from './types'

export default function taskReducer(
  state = [],
  action: TaskActionTypes
) {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        action.taskId
      ]
    default:
      return state
  }
}
