import { EventState } from './events/types'
import { TaskState} from './tasks/types'
import { UserState} from './users/types'
import { SubjectState } from './subjects/types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { ErrorState } from './error/types'
import { SuccessState } from './success/types'

export interface Tokens {
  access_token: string | '';
  id_token: string | '';
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  status: "Pending" | "Accept" | "Reject";
}

interface Host {
  id: string;
  name: string;
  email: string;
}

export interface Task {
  id: string;
  details?: string;
  owner?: string;
  eventId: string;
}

export interface SubjectInfo {
  name: string;
  imagePreview?: string | null;
  detail?: string;
}

export interface Subject {
  id: string;
  name: string;
  detail?: string;
  createdBy: string;
  imageUrl?: string;
  imageLink?: string;
}

export interface EventData {
  id: string;
  title: string;
  host: Host;
  subject: Subject;
  date: string;
  createDate: string;
  address: string;
  maxNumberGuest: number;
  tasks: Task[];
  guestInEvents: Guest[];
  totalCost: number;
  additionalInfo: string;
  eventStatus: "Open" | "Close";
  pricePerGuest: number;
}


export interface AppState {
  event: EventState;
  subject: SubjectState;
  task: TaskState;
  user: UserState;
  error: ErrorState;
  success: SuccessState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>