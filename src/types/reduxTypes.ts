import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export interface Tokens {
  access_token: string | ''
  id_token: string | ''
}

export interface User {
  id: string
  name: string
  email: string
}

export interface Guest {
  id: string
  name: string
  email: string
  status: 'Pending' | 'Accept' | 'Reject'
}

interface Host {
  id: string
  name: string
  email: string
}

export interface Task {
  id: string
  details?: string
  owner?: string
  eventId: string
}

export interface SubjectInfo {
  name: string
  imagePreview?: string | null
  detail?: string
}

export interface Subject {
  id: string
  name: string
  detail?: string
  createdBy: string
  imageUrl?: string
  imageLink?: string
}

export interface EventData {
  id: string
  title: string
  host: Host
  subject: Subject
  date: string
  createDate: string
  address: string
  maxNumberGuest: number
  tasks: Task[]
  guestInEvents: Guest[]
  totalCost: number
  additionalInfo: string
  eventStatus: 'Open' | 'Close'
  pricePerGuest: number
}

export interface AppState {
  event: EventState
  subject: SubjectState
  task: TaskState
  user: UserState
  error: ErrorState
  success: SuccessState
}

export type AsyncAction<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

// ERROR TYPES
export const HIDE_ERROR = 'HIDE_ERROR'
export const SET_ERROR = 'SET_ERROR'
// STATE TYPE
export interface ErrorState {
  error: string | null
  isOpen: boolean
}

export interface setError {
  type: typeof SET_ERROR
  error: string
}

export interface hideError {
  type: typeof HIDE_ERROR
  error: null
}

export type ErrorActionTypes = CreateEventError | hideError | setError

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

// OTHER TYPES
export type Events = EventData[]

export interface EventsFromServer {
  items: Events
  [propName: string]: any
}

// ACTION TYPES
// CREATE EVENT ACTION TYPES
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

// GET SINGLE EVENT ACTION TYPES
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

// RECEIVE EVENT ACTION TYPES
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

// SUBSCRIBE TO EVENT ACTION TYPES
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

// ALL EVENT ACTION TYPES
export type EventActionTypes =
  | CreateEventActions
  | SelectEventActions
  | ReceiveEventsActions
  | SubscribeActionTypes

//  STATE TYPE
export type EventState = {
  selectedEvent: null | EventData
  eventsList: Events
}

// SUBJECT TYPES
export const CREATE_SUBJECT_REQUEST = 'CREATE_SUBJECT_REQUEST'
export const CREATE_SUBJECT_SUCCESS = 'CREATE_SUBJECT_SUCCESS'
export const CREATE_SUBJECT_ERROR = 'CREATE_SUBJECT_ERROR'

export const RECEIVE_SUBJECTS_REQUEST = 'RECEIVE_SUBJECTS_REQUEST'
export const RECEIVE_SUBJECTS_SUCCESS = 'RECEIVE_SUBJECTS_SUCCESS'
export const RECEIVE_SUBJECTS_ERROR = 'RECEIVE_SUBJECTS_ERROR'

// OTHER TYPES
export type Subjects = Subject[]

export interface SubjectsFromServer {
  items: Subjects
  [propName: string]: any
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

type CreateSubject =
  | CreateSubjectRequest
  | CreateSubjectSuccess
  | CreateSubjectError

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

type ReceiveSubjects =
  | ReceiveSubjectsRequest
  | ReceiveSubjectsAction
  | ReceiveSubjectsError

export type SubjectActionTypes = CreateSubject | ReceiveSubjects

// STATE TYPE
export type SubjectState = Subjects

// SUCCESS TYPES
export const HIDE_SUCCESS = 'HIDE_SUCCESS'
export const SET_SUCCESS = 'SET_SUCCESS'
// STATE TYPE
export interface SuccessState {
  success: string | null
  isOpen: boolean
}

export interface setSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export interface hideSuccess {
  type: typeof HIDE_SUCCESS
  success: null
}

export type SuccessActionTypes = hideSuccess | setSuccess

// TASKS TYPES
export const CREATE_TASK: string = 'CREATE_TASK'

// ACTION TYPES
interface CreateTaskAction {
  type: typeof CREATE_TASK
  taskId: string
}

export type TaskActionTypes = CreateTaskAction

// STATE TYPE
export type TaskState = string[] | []

// USER TYPES

export const SET_AUTHED_USER: string = 'SET_AUTHED_USER'
export const LOG_OUT: string = 'LOG_OUT'

export type TokensData = Tokens

export interface DecodedUser extends User {
  [propName: string]: any
}

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}

// ACTIONS TYPES
interface SetAuthedUserAction {
  type: typeof SET_AUTHED_USER
  payload: User
}

interface LogOutAction {
  type: typeof LOG_OUT
  payload: null
}

export type UserActionTypes = SetAuthedUserAction | LogOutAction

// STATE TYPE
export interface NotLoggedUser {
  isLoggedIn: false
  user: null
}

export interface LoggedUser {
  isLoggedIn: true
  user: User
}

export type UserState = NotLoggedUser | LoggedUser
