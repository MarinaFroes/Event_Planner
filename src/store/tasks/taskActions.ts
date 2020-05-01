import { CREATE_TASK } from './types'

export const createTaskAction = (taskId: string) => {
  return {
    type: CREATE_TASK,
    taskId
  }
}
