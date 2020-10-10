import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { User, Subject, EventData, Subjects, Events } from './index'

// ERROR ACTION TYPES
export const HIDE_ERROR = 'HIDE_ERROR'
export const SET_ERROR = 'SET_ERROR'

// ERROR STATE TYPE
export interface ErrorState {
  error: string | null
  isOpen: boolean
}

// ERROR ACTION CREATOR TYPES
export interface setError {
  type: typeof SET_ERROR
  error: string
}

export interface hideError {
  type: typeof HIDE_ERROR
  error: null
}

export type ErrorActionTypes = CreateEventError | hideError | setError

// EVENT ACTION TYPES
export const CREATE_EVENT_REQUEST = 'CREATE_EVENT_REQUEST'
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS'
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR'

export const SELECT_EVENT_REQUEST = 'SELECT_EVENT_REQUEST'
export const SELECT_EVENT_SUCCESS = 'SELECT_EVENT_SUCCESS'
export const SELECT_EVENT_ERROR = 'SELECT_EVENT_ERROR'

export const RECEIVE_EVENTS_REQUEST = 'RECEIVE_EVENTS_REQUEST'
export const RECEIVE_EVENTS_SUCCESS = 'RECEIVE_EVENTS_SUCCESS'
export const RECEIVE_EVENTS_ERROR = 'RECEIVE_EVENTS_ERROR'

export const SUBSCRIBE_REQUEST = 'SUBSCRIBE_REQUEST'
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS'
export const SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR'

// EVENT ACTION CREATOR TYPES

// CREATE EVENT ACTION CREATOR TYPES
export interface CreateEventRequest {
  type: typeof CREATE_EVENT_REQUEST
}

export interface CreateEventSuccess {
  type: typeof CREATE_EVENT_SUCCESS
  payload: EventData
}

export interface CreateEventError {
  type: typeof CREATE_EVENT_ERROR
  error: string
}

type CreateEventActions =
  | CreateEventRequest
  | CreateEventSuccess
  | CreateEventError

// GET SINGLE EVENT ACTION CREATOR TYPES
export interface SelectEventRequest {
  type: typeof SELECT_EVENT_REQUEST
}

export interface SelectEventSuccess {
  type: typeof SELECT_EVENT_SUCCESS
  payload: EventData
}

export interface SelectEventError {
  type: typeof SELECT_EVENT_ERROR
  error: string
}

type SelectEventActions =
  | SelectEventRequest
  | SelectEventSuccess
  | SelectEventError

// RECEIVE EVENT ACTION CREATOR TYPES
export interface ReceiveEventsRequest {
  type: typeof RECEIVE_EVENTS_REQUEST
}

export interface ReceiveEventsSuccess {
  type: typeof RECEIVE_EVENTS_SUCCESS
  payload: Events
}

export interface ReceiveEventsError {
  type: typeof RECEIVE_EVENTS_ERROR
  error: string
}

type ReceiveEventsActions =
  | ReceiveEventsRequest
  | ReceiveEventsSuccess
  | ReceiveEventsError

// SUBSCRIBE TO EVENT ACTION CREATOR TYPES
export interface SubscribeRequest {
  type: typeof SUBSCRIBE_REQUEST
}

export interface SubscribeSuccess {
  type: typeof SUBSCRIBE_SUCCESS
  payload: EventData
  success: string
}

export interface SubscribeError {
  type: typeof SUBSCRIBE_ERROR
  error: string
}

type SubscribeActionTypes = SubscribeRequest | SubscribeSuccess | SubscribeError

// ALL EVENT ACTION CREATOR TYPES
export type EventActionTypes =
  | CreateEventActions
  | SelectEventActions
  | ReceiveEventsActions
  | SubscribeActionTypes

//  EVENT STATE TYPE
export type EventState = {
  selectedEvent: null | EventData
  eventsList: Events
}

// SUBJECT ACTION TYPES
export const CREATE_SUBJECT_REQUEST = 'CREATE_SUBJECT_REQUEST'
export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS'
export const CREATE_SUBJECT_ERROR = 'CREATE_SUBJECT_ERROR'

export const RECEIVE_SUBJECTS_REQUEST = 'RECEIVE_SUBJECTS_REQUEST'
export const RECEIVE_SUBJECTS_SUCCESS = 'RECEIVE_SUBJECTS_SUCCESS'
export const RECEIVE_SUBJECTS_ERROR = 'RECEIVE_SUBJECTS_ERROR'

// SUBJECT ACTION CREATOR  TYPES

// CREATE SUBJECT ACTION CREATOR TYPES
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

type CreateSubject =
  | CreateSubjectRequest
  | CreateSubjectSuccess
  | CreateSubjectError

// RECEIVE SUBJECT ACTION CREATOR TYPES
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

type ReceiveSubjects =
  | ReceiveSubjectsRequest
  | ReceiveSubjectsAction
  | ReceiveSubjectsError

export type SubjectActionTypes = CreateSubject | ReceiveSubjects

// SUBJECT STATE TYPE
export type SubjectState = Subjects

// SUCCESS ACTION TYPES
export const HIDE_SUCCESS = 'HIDE_SUCCESS'
export const SET_SUCCESS = 'SET_SUCCESS'

// SUCCESS STATE TYPE
export interface SuccessState {
  success: string | null
  isOpen: boolean
}

// SUCCESS ACTION CREATOR TYPES
export interface setSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export interface hideSuccess {
  type: typeof HIDE_SUCCESS
  success: null
}

export type SuccessActionTypes = hideSuccess | setSuccess

// TASKS ACTION TYPES
export const CREATE_TASK: string = 'CREATE_TASK'

// TASKS ACTION CREATOR TYPES
interface CreateTaskAction {
  type: typeof CREATE_TASK
  taskId: string
}

export type TaskActionTypes = CreateTaskAction

// TASKS STATE TYPE
export type TaskState = string[] | []

// USER ACTION TYPES
export const SET_AUTHED_USER: string = 'SET_AUTHED_USER'
export const LOG_OUT: string = 'LOG_OUT'

// USER ACTION CREATOR TYPES
interface SetAuthedUserAction {
  type: typeof SET_AUTHED_USER
  payload: User
}

interface LogOutAction {
  type: typeof LOG_OUT
  payload: null
}

export type UserActionTypes = SetAuthedUserAction | LogOutAction

// USER STATE TYPE
export interface NotLoggedUser {
  isLoggedIn: false
  user: null
}

export interface LoggedUser {
  isLoggedIn: true
  user: User
}

export type UserState = NotLoggedUser | LoggedUser

// APP STATE TYPE
export interface AppState {
  event: EventState
  subject: SubjectState
  task: TaskState
  user: UserState
  error: ErrorState
  success: SuccessState
}

// ASYNC ACTION TYPE
export type AsyncAction<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>
