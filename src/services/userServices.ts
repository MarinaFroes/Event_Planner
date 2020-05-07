import { endpoint } from './api'
import { UserData } from './userServicesTypes'

export const getUsers = async () => {
  let response = await fetch(`${endpoint}/users`)
  
  if (response.status === 200) {
    let usersData = await response.json()
    return usersData.items
  }

  throw new Error(`${response.status}`)
}

export const getUser = async (userId: string) => {
  let response = await fetch(`${endpoint}/users/${userId}`)
  
  if (response.status === 200) {
    let userData: UserData = await response.json()
    return userData
  }

  throw new Error(`${response.status}`)
}
