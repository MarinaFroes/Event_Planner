import { CREATE_TASK, TaskActionTypes } from '../../types/reduxTypes'

// CREATE TASK ACTION CREATORS
export const createTaskAction = (taskId: string): TaskActionTypes => {
  return {
    type: CREATE_TASK,
    taskId,
  }
}
