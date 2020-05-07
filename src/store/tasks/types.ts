export const CREATE_TASK: string = 'CREATE_TASK'

// ACTION TYPES
interface CreateTaskAction {
  type: typeof CREATE_TASK
 taskId: string
}

export type TaskActionTypes = CreateTaskAction 

// STATE TYPE
export type TaskState = string[] | []