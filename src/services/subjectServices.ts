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

export const getSaveImageLink = async (subjectId: string) => {
  const tokens = getTokensFromLocalStorage()
  let access_token: string = ''
  let id_token: string = ''

  if (tokens) {
    access_token = tokens.access_token
    id_token = tokens.id_token
  }

  const response = await fetch(`${endpoint}/signed-url/put-image/${subjectId}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token,
      'X-Id-Token': id_token,
    }
  })

  if (response.ok) {
    let saveLink: string = await response.json()
    return saveLink
  }

  throw new Error(`Response status ${response.status}: no image link`)
}

export const saveImage = async (saveLink: string, imageBlob: Blob) => {
  const response = await fetch(`${saveLink}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    body: imageBlob
  })

  if (response.status === 200) {
    return
  }

  throw new Error(`Response status ${response.status}: image not saved`)
}

export const getImageLink = async (subjectId: string) => {
  const response = await fetch(`${endpoint}/signed-url/get-image/${subjectId}`)

  if (response.status === 200) {
    let imageLink: string = await response.json()
    return imageLink
  }

  throw new Error(`Response status ${response.status}: image not retrieved`)
}
