import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import { getLocalStorage, setLocalStorage } from '../utils/authDataRepository'

export const loginUrl = "https://cheetos-eventplanner.auth.eu-central-1.amazoncognito.com/login?client_id=up5tc3aetd1skggbojedfjrqh&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:8080/v1/auth"

interface Tokens {
  access_token: string,
  id_token: string
}

export const isTokenProvided = (location: Location): boolean => {
  const values = getTokensFromURL(location)
  if (!values) {
    return false
  }

  if (values.access_token.length > 0 && values.id_token.length > 0) {
    return true
  } else {
    return false
  }
}

export const getTokensFromURL = (location: Location): Tokens | null => {
  const values = queryString.parse(location.search)
  if (Object.keys(values).length <= 0) {
    return null
  }
  return {
    access_token: values.access_token as string,
    id_token: values.id_token as string
  }
}

const saveUserData = (data: any): void => {
  setLocalStorage('access_token', data.access_token)
  setLocalStorage('id_token', data.id_token)
  setLocalStorage('authedUserData', data.authedUserData)
}

export const saveAuthedUser = (location: Location): void  => {

  const values = getTokensFromURL(location)
  if (values === null) {
    return
  }

  const { access_token, id_token } = values
  const authedUserData = jwt_decode(JSON.stringify(id_token))
  saveUserData({ access_token, id_token, authedUserData })
}

export const getUserName = () => {
  
  const authedUser = getLocalStorage('authedUserData')
  const authedUserName = authedUser ? authedUser.name : ''

  return authedUserName
}

