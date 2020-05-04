import { endpoint } from './api'
import { getTokensFromLocalStorage } from './authServices'
import { SubjectInput, SubjectData } from './subjectServicesTypes'

export const getSubject = async (subjectId: string) => {
  const response = await fetch(`${endpoint}/subjects/${subjectId}`)

  if (response.status === 200) {
    let subject: SubjectData = await response.json()
    return subject
  }

  throw new Error(`${response.status}`)
}

export const createSubject = async (subject: SubjectInput) => {
  const tokens = getTokensFromLocalStorage()
  const [access_token, id_token] = tokens

  const response = await fetch(`${endpoint}/subjects`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    // credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
      'X-Id-Token': id_token,
    },
    body: JSON.stringify(subject)
  })

  if (response.ok) {
    let subjectId: string = await response.json()
    return subjectId
  }

  throw new Error(`${response.status}`)
}
