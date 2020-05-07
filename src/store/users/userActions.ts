import jwt_decode from 'jwt-decode'

import * as authService from '../../services/authServices'
import { SET_AUTHED_USER, DecodedUser, TokensData } from './types'

export const setAuthedUserAction = (tokens: TokensData) => {
  const { access_token, id_token } = tokens
  const authedUserData: DecodedUser = jwt_decode(JSON.stringify(id_token))
  authService.saveUserData({ access_token, id_token, authedUserData })
  const { name, id, email } = authedUserData

  return {
    type: SET_AUTHED_USER,
    payload: {
      name, 
      id,
      email
    }
  }
}