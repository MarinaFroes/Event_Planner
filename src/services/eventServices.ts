import { endpoint, access_token, id_token } from './api'
import { Event, CreatedEvent } from './eventServicesTypes'

export const getEvent = async (eventId: string) => {
  const response = await fetch(`${endpoint}/events/${eventId}`)
  
  if (response.status === 200) {
    let eventData = await response.json()
    return eventData
  }

  throw new Error(`${response.status}`)
}

export const saveEvent = async (event: Event) => {
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
    let createdEvent: CreatedEvent = await response.json()
    return createdEvent
  }

  throw new Error(`${response.status}`)
}
