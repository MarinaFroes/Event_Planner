export const CREATE_TASK: string = 'CREATE_TASK'

interface CreateTaskAction {
  type: typeof CREATE_TASK
 taskId: string
}

export type TaskActionTypes = CreateTaskAction 