import {
  SuccessActionTypes,
  HIDE_SUCCESS,
  SET_SUCCESS,
} from '../../types/reduxTypes'

export const setSuccessAction = (success: string): SuccessActionTypes => {
  return {
    type: SET_SUCCESS,
    success: success,
  }
}

export const hideSuccessAction = (): SuccessActionTypes => {
  return {
    type: HIDE_SUCCESS,
    success: null,
  }
}
