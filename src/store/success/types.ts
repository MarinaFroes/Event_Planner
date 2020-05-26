export const HIDE_SUCCESS = 'HIDE_SUCCESS'
export const SET_SUCCESS = 'SET_SUCCESS'
// STATE TYPE
export interface SuccessState {
  success: string | null;
  isOpen: boolean
}

export interface setSuccess {
  type: typeof SET_SUCCESS
  success: string
}

export interface hideSuccess {
  type: typeof HIDE_SUCCESS
  success: null
}

export type SuccessActionTypes = hideSuccess | setSuccess