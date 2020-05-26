import { SuccessState, SuccessActionTypes, HIDE_SUCCESS } from './types'


const initialSuccessState: SuccessState = {
  success: null,
  isOpen: false
}

export default function successReducer(
  state = initialSuccessState,
  action: SuccessActionTypes
): SuccessState {
  const { success } = action

  if (action.success) {
    return {
      success: success,
      isOpen: true
    }
  } else if (action.type === HIDE_SUCCESS) {
    return {
      success: null,
      isOpen: false
    }
  }

  return state
}