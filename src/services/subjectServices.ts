import { endpoint, access_token, id_token } from './api'

interface Subject {
  name: string;
  imageUrl: string;
  details?: string;
}

interface NewSubject extends Subject {
  id: string;
}

export const saveSubject = async (subject: Subject) => {
  const response = await fetch(`${endpoint}/subjects`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': access_token,
      'X-Id-Token': id_token
    },
    body: JSON.stringify(subject)
  })

  if (response.status === 200) {
    let createdSubject: NewSubject = await response.json()
    return createdSubject
  }

  throw new Error(`${response.status}`)
}
