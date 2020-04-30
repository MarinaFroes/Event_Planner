export const CREATE_SUBJECT: string = 'CREATE_SUBJECT'
export const CREATE_TASK: string = 'CREATE_TASK'
export const CREATE_EVENT: string = 'CREATE_EVENT'

export interface ISubject {
  name: string;
  imageUrl: string;
}

export interface ICreateSubjectAction {
  type: typeof CREATE_SUBJECT
  payload: ISubject
}

export interface ITask {
  name: string;
  event_id: string;
}

export interface ICreateTaskAction {
  type: typeof CREATE_TASK
  payload: ITask
}

export interface IEvent {
  title: string;
  additionalInfo?: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks?: ITask[];
  date: string;
  subject: ISubject;
}

export interface ICreateEventAction {
  type: typeof CREATE_EVENT
  payload: IEvent
}

