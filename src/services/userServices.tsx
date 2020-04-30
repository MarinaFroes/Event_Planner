import { endpoint } from './api'

export const getUsers = async () => {
  let response = await fetch(`${endpoint}/users`)
  
  if (response.status === 200) {
    let usersData = await response.json()
    return usersData.items
  }

  throw new Error(`${response.status}`)
}
