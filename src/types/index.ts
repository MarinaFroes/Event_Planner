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

export type Subjects = Subject[]

export interface SubjectsFromServer {
  items: Subjects
  [propName: string]: any
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

export type Events = EventData[]

export interface EventsFromServer {
  items: Events
  [propName: string]: any
}

export type TokensData = Tokens

export interface DecodedUser extends User {
  [propName: string]: any
}

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}

export type TParams = {
  eid: string
}
