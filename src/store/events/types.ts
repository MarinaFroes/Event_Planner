import { ISubject } from '../subjects/types'
import { ITask} from '../tasks/types'

export const CREATE_EVENT: string = 'CREATE_EVENT'

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

