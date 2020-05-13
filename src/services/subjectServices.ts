import { endpoint } from './api'
import { getTokensFromLocalStorage } from './authServices'
import { SubjectInput, SubjectOutput } from './subjectServicesTypes'
import { SubjectsFromServer } from '../store/subjects/types'

export const getSubject = async (subjectId: string) => {
  const response = await fetch(`${endpoint}/subjects/${subjectId}`)

  if (response.status === 200) {
    let subject: SubjectOutput = await response.json()
    return subject
  }

  throw new Error(`${response.status}`)
}

export const getSubjects = async (userId: string) => {
  const response = await fetch(`${endpoint}/subjects?userId=${userId}&pageSize=100&page=1`)
  if (response.status === 200) {
    let subjects: SubjectsFromServer = await response.json()
    return subjects
  }

  throw new Error(`${response.status}`)
}

export const createSubject = async (subject: SubjectInput) => {
  const tokens = getTokensFromLocalStorage()
  let access_token: string = ''
  let id_token: string = ''

  if (tokens) {
    access_token = tokens.access_token
    id_token = tokens.id_token
  }
 
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
