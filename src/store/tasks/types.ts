export const CREATE_TASK: string = 'CREATE_TASK'

export interface ITask {
  name: string;
  event_id: string;
}

export interface ICreateTaskAction {
  type: typeof CREATE_TASK
  payload: ITask
}
