import { endpoint } from './api'
import { getTokensFromLocalStorage } from './authServices'

import { EventInput, EventData } from './eventServicesTypes'

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${endpoint}/events/${eventId}`)
  if (response.status === 200) {
    let eventData: EventData = await response.json()
    return eventData
  }

  throw new Error(`${response.status}`)
}

export const createEvent = async (event: EventInput) => {
  const tokens = getTokensFromLocalStorage()
  const [access_token, id_token] = tokens

  const response = await fetch(`${endpoint}/events`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify(event)
  })

  if (response.status === 200) {
    let eventId: string = await response.json()
    return eventId
  }

  throw new Error(`${response.status}`)
}

export const subscribeToEvent = async (guestId: string, eventId: string) => {
  const tokens = getTokensFromLocalStorage()
  const [access_token, id_token] = tokens

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