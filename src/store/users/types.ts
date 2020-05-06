import { User } from '../../services/userServicesTypes'

export const SET_AUTHED_USER: string = 'SET_AUTHED_USER'
export const LOG_OUT: string = 'LOG_OUT'

export interface Tokens {
  access_token: string;
  id_token: string;
}

export interface DecodedUser {
  name: string;
  iss?: string;
  id: string;
  exp?: number;
  email: string;
}

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}

interface SetAuthedUserAction {
  type: typeof SET_AUTHED_USER
  user: User
}

interface LogOutAction {
  type: typeof LOG_OUT
}

export type UserActionTypes = SetAuthedUserAction | LogOutAction

export type UserState = User