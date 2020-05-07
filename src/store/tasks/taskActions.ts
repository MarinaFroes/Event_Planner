import { CREATE_TASK, TaskActionTypes } from './types'

export const createTaskAction = (taskId: string): TaskActionTypes => {
  return {
    type: CREATE_TASK,
    taskId
  }
}
