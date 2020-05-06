import { SET_AUTHED_USER, LOG_OUT, UserActionTypes } from './types'

export default function userReducer(
  state = {},
  action: UserActionTypes
) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action
      }
    case LOG_OUT:
      return {}
    default:
      return state
  }
}
/**
 * import { SET_AUTHED_USER, LOG_OUT } from '../actions/authedUser'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    case LOG_OUT:
      return null
    default:
      return state
  }
}
 */
