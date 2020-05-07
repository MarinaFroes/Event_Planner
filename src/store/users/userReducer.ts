import { SET_AUTHED_USER, LOG_OUT, UserActionTypes } from './types'

export default function userReducer(
  state = {},
  action: UserActionTypes
) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.payload
      }
    case LOG_OUT:
      return {}
    default:
      return state
  }
}

