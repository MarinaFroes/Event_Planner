import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import { getLocalStorage, setLocalStorage } from '../utils/authDataRepository'
import { TokensData, UserData } from '../types/authServicesTypes'
import { DecodedUser } from '../types'

export const loginUrl =
  'https://cheetos-eventplanner.auth.eu-central-1.amazoncognito.com/login?client_id=up5tc3aetd1skggbojedfjrqh&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:8080/v1/auth'

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

export const getTokensFromURL = (location: Location): TokensData | null => {
  const values = queryString.parse(location.search)
  if (Object.keys(values).length <= 0) {
    return null
  }
  return {
    access_token: values.access_token as string,
    id_token: values.id_token as string,
  }
}

export const getTokensFromLocalStorage = (): TokensData | null => {
  const access_token = getLocalStorage('access_token')
  const id_token = getLocalStorage('id_token')

  if (!id_token || !access_token) {
    return null
  }

  return {
    access_token,
    id_token,
  }
}

export const getTokens = (location: Location): TokensData | null => {
  if (getTokensFromURL(location)) {
    return getTokensFromURL(location)
  }

  if (getTokensFromLocalStorage()) {
    return getTokensFromLocalStorage()
  }

  return null
}

export const saveUserData = (data: UserData): void => {
  setLocalStorage('access_token', data.access_token)
  setLocalStorage('id_token', data.id_token)
  setLocalStorage('authedUserData', data.authedUserData)
}

export const saveAuthedUser = (location: Location): void => {
  const values = getTokensFromURL(location)
  if (values === null) {
    return
  }
  const { access_token, id_token } = values
  const authedUserData: DecodedUser = jwt_decode(JSON.stringify(id_token))
  saveUserData({ access_token, id_token, authedUserData })
}

export const getUserName = () => {
  const authedUser = getLocalStorage('authedUserData')
  const authedUserName = authedUser ? authedUser.name : ''

  return authedUserName
}
