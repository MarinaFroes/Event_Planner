import { endpoint } from './api'
import { getTokensFromLocalStorage } from './authServices'
import { EventInput, EventOutput } from './eventServicesTypes'
import { EventsFromServer } from '../store/events/types'

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${endpoint}/events/${eventId}`)
  if (response.status === 200) {
    let eventData: EventOutput = await response.json()
    return eventData
  }

  throw new Error(`Response status ${response.status}: It could not get event id ${eventId}`)
}

export const getEvents = async (userId: string) => {
  const response = await fetch(`${endpoint}/events?hostId=${userId}&pageSize=100&page=1`)
  if (response.status === 200) {
    let events: EventsFromServer = await response.json()
    return events
  }

  throw new Error(`Response status ${response.status}: It could not get events`)
}

export const createEvent = async (event: EventInput) => {
    const tokens = getTokensFromLocalStorage()
    let access_token: string = ''
    let id_token: string = ''

    if (tokens) {
      access_token = tokens.access_token
      id_token = tokens.id_token
    }

    const response = await fetch(`${endpoint}/events`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token,
        'X-Id-Token': id_token
      },
      body: JSON.stringify(event)
    })
    if (response.ok) {
      let eventId: string = await response.json()
      return eventId
    } 
    
    throw new Error(`Response status ${response.status}: Event was not created`)
}

export const subscribeToEvent = async (eventId: string, guestId: string) => {
  const tokens = getTokensFromLocalStorage()
  let access_token: string = ''
  let id_token: string = ''

  if (tokens) {
    access_token = tokens.access_token
    id_token = tokens.id_token
  }
  
  const response = await fetch(`${endpoint}/events/${eventId}/subscribe`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify({ guestId })
  })
  if (response.status === 202) {
    return 
  }

  throw new Error(`Response status ${response.status}: It could not subscribe to event`)
}