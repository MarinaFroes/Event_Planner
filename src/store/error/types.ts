import { CreateEventError } from '../events/types'


export interface ErrorState {
  error: string | null
}

export type ErrorActionTypes = CreateEventError 