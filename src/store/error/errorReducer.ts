import { ErrorState, ErrorActionTypes, HIDE_ERROR } from './types'


const initialErrorState: ErrorState = {
  error: null,
  isOpen: false
}

export default function errorReducer(
  state = initialErrorState,
  action: ErrorActionTypes
): ErrorState {
  const { error } = action

  if (action.error) {
    return {
      error: error,
      isOpen: true
    }
  } else if (action.type === HIDE_ERROR) {
    return {
      error: null,
      isOpen: false
    }
  }
   
  return state
}