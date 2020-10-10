import { ErrorActionTypes, HIDE_ERROR, SET_ERROR } from '../../types/reduxTypes'

export const setErrorAction = (error: string): ErrorActionTypes => {
  return {
    type: SET_ERROR,
    error: error,
  }
}

export const hideErrorAction = (): ErrorActionTypes => {
  return {
    type: HIDE_ERROR,
    error: null,
  }
}
