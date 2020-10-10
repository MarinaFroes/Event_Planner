import {
  SET_AUTHED_USER,
  LOG_OUT,
  UserActionTypes,
  UserState,
  NotLoggedUser,
  LoggedUser,
} from '../../types/reduxTypes'

const initialUserState: UserState = {
  isLoggedIn: false,
  user: null,
}

function setAuthedUserReducer(state: NotLoggedUser, action: UserActionTypes) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: { ...action.payload },
      }
    default:
      return state
  }
}

function logOutReducer(state: LoggedUser, action: UserActionTypes) {
  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload,
      }
    default:
      return state
  }
}

export default function userReducer(
  state = initialUserState,
  action: UserActionTypes
) {
  switch (state.isLoggedIn) {
    case false:
      return setAuthedUserReducer(state, action)
    case true:
      return logOutReducer(state, action)
    default:
      return state
  }
}
