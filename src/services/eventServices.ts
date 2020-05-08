import { endpoint } from './api'
import { getTokensFromLocalStorage } from './authServices'

import { EventInput, EventOutput } from './eventServicesTypes'

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${endpoint}/events/${eventId}`)
  if (response.status === 200) {
    let eventData: EventOutput = await response.json()
    return eventData
  }

  throw new Error(`${response.status}`)
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

  throw new Error(`${response.status}`)
}

export const subscribeToEvent = async (guestId: string, eventId: string) => {
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
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify({ guestId })
  })

  if (response.status === 200) {
    let res: {} = await response.json()
    return res
  }

  throw new Error(`${response.status}`)
}