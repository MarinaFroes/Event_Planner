import { ITask, ICreateTaskAction, CREATE_TASK } from './types'

export const createTaskAction = (task: ITask): ICreateTaskAction => {
  return {
    type: CREATE_TASK,
    payload: {
      ...task
    }
  }
}
