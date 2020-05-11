import { Subject } from '../../store/types'

export const CREATE_SUBJECT = 'CREATE_SUBJECT'
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS'

// OTHER TYPES
export type Subjects = Subject[]

export interface SubjectsFromServer {
  items: Subjects;
  [propName: string]: any;
}

// ACTION TYPES
interface CreateSubjectAction {
  type: typeof CREATE_SUBJECT
  payload: Subject
}

interface ReceiveSubjectsAction {
  type: typeof RECEIVE_SUBJECTS
  payload: Subjects
}

export type SubjectActionTypes = CreateSubjectAction | ReceiveSubjectsAction

// STATE TYPE
export type SubjectState = Subjects