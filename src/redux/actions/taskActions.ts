import { CREATE_TASK, TaskActionTypes } from '../../types/reduxTypes'

export const createTaskAction = (taskId: string): TaskActionTypes => {
  return {
    type: CREATE_TASK,
    taskId,
  }
}
