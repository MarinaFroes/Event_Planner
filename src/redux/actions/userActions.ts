import jwt_decode from 'jwt-decode'

import * as authService from '../../services/authServices'
import {
  SET_AUTHED_USER,
  LOG_OUT,
  UserActionTypes,
} from '../../types/reduxTypes'
import { DecodedUser, TokensData } from '../../types'

export const setAuthedUserAction = (tokens: TokensData): UserActionTypes => {
  const { access_token, id_token } = tokens
  const authedUserData: DecodedUser = jwt_decode(JSON.stringify(id_token))

  authService.saveUserData({ access_token, id_token, authedUserData })
  const { name, id, email } = authedUserData

  return {
    type: SET_AUTHED_USER,
    payload: {
      name,
      id,
      email,
    },
  }
}

export const logOutAction = (): UserActionTypes => {
  return {
    type: LOG_OUT,
    payload: null,
  }
}
