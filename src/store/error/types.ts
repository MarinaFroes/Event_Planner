import { CreateEventError } from '../events/types'

export const HIDE_ERROR = 'HIDE_ERROR'
export const SET_ERROR = 'SET_ERROR'
// STATE TYPE
export interface ErrorState {
  error: string | null;
  isOpen: boolean
}

export interface setError {
  type: typeof SET_ERROR
  error: string
}

export interface hideError {
  type: typeof HIDE_ERROR
  error: null
}

export type ErrorActionTypes = CreateEventError | hideError | setError