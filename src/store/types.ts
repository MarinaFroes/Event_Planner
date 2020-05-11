import { EventState } from './events/types'
import { TaskState} from './tasks/types'
import { UserState} from './users/types'
import { SubjectState } from './subjects/types'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export interface Tokens {
  access_token: string | '';
  id_token: string | '';
}

export interface User {
  id: string;
  name: string;
  email: string;
}

interface Guest {
  id: string;
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
  imageUrl?: FileList | null;
  details?: string;
}

export interface Subject extends SubjectInfo {
  id: string;
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
  tasks: [] | Task[];
  guestInEvents: [] | Guest[];
  totalCost: number;
  additionalInfo: string;
  eventStatus: "Open" | "Close";
  pricePerGuest: number;
}

// TODO - No nested states - change to:
// export interface EventData {
//   id: string;
//   title: string;
//   host: string;
//   subject: string;
//   date: string;
//   createDate: string;
//   address: string;
//   maxNumberGuest: number;
//   tasks: string[];
//   guestInEvents: [] | Guest[];
//   totalCost: number;
//   additionalInfo: string;
//   eventStatus: "Open" | "Close";
//   pricePerGuest: number;
// }

export interface AppState {
  event: EventState;
  subject: SubjectState;
  task: TaskState;
  user: UserState;
}

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>