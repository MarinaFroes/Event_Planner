import { ErrorState, ErrorActionTypes } from './types'


const initialErrorState: ErrorState = {
  error: null
}

export default function errorReducer(
  state = initialErrorState,
  action: ErrorActionTypes
): ErrorState {
  const { error } = action

  if (error) {
    return {
      error: error
    }
  }
   
  return state
}