import { Subject } from '../../store/types'

export const CREATE_SUBJECT_REQUEST = 'CREATE_SUBJECT_REQUEST'
export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS'
export const CREATE_SUBJECT_ERROR = 'CREATE_SUBJECT_ERROR'

export const RECEIVE_SUBJECTS_REQUEST = 'RECEIVE_SUBJECTS_REQUEST'
export const RECEIVE_SUBJECTS_SUCCESS = 'RECEIVE_SUBJECTS_SUCCESS'
export const RECEIVE_SUBJECTS_ERROR = 'RECEIVE_SUBJECTS_ERROR'

// OTHER TYPES
export type Subjects = Subject[]

export interface SubjectsFromServer {
  items: Subjects;
  [propName: string]: any;
}

// ACTION TYPES
// Create subject action types
interface CreateSubjectRequest {
  type: typeof CREATE_SUBJECT_REQUEST
}

interface CreateSubjectSuccess {
  type: typeof CREATE_SUBJECT_SUCCESS
  payload: Subject
}

interface CreateSubjectError {
  type: typeof CREATE_SUBJECT_ERROR
  error: string
}

type CreateSubject = CreateSubjectRequest | CreateSubjectSuccess | CreateSubjectError

// Receive Subjects action types
interface ReceiveSubjectsRequest {
  type: typeof RECEIVE_SUBJECTS_REQUEST
}

interface ReceiveSubjectsAction {
  type: typeof RECEIVE_SUBJECTS_SUCCESS
  payload: Subjects
}

interface ReceiveSubjectsError {
  type: typeof RECEIVE_SUBJECTS_ERROR
  error: string
}

type ReceiveSubjects = ReceiveSubjectsRequest | ReceiveSubjectsAction | ReceiveSubjectsError

export type SubjectActionTypes = CreateSubject | ReceiveSubjects

// STATE TYPE
export type SubjectState = Subjects