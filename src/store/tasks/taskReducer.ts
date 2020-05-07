import { CREATE_TASK, TaskActionTypes, TaskState } from './types'

const initialTaskState: TaskState = []

export default function taskReducer(
  state = initialTaskState,
  action: TaskActionTypes
): TaskState {
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
