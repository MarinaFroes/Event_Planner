import { getLocalStorage } from './helpers'

const absolutePath = 'http://localhost:8080'
// const relativePath = 'localhost/api/'

let access_token = getLocalStorage('access_token')
let id_token = getLocalStorage('id_token')

export const getUsers = async () => {
  const response = await fetch(`${absolutePath}/users`)
  const usersData = await response.json()

  return usersData.items
}

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${absolutePath}/events/${eventId}`)
  const eventData = await response.json()
  return eventData
}

interface Task {
  id: string,
  details: string,
  owner: string,
  eventId: string
}

interface Subject {
  name: string,
  imageUrl: string
}

interface Event {
  title: string;
  host: string;
  subject: Subject;
  additionalInfo?: string;
  date: string;
  time: string;
  address: string;
  maxNumberGuests: number;
  totalCost: number;
  tasks?: Task[]
}

export const saveEvent = async (event: Event) => {
  const response = await fetch(`${absolutePath}/events`, {
    method: 'POST', 
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify(event) // body data type must match "Content-Type" header
  });
  return response.json()
}

export const saveSubject = async (subject: Subject) => {
  const response = await fetch(`${absolutePath}/subjects`, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify(subject) // body data type must match "Content-Type" header
  });
  return response.json()
}