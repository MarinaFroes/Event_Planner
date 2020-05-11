import { User, Tokens } from '../types'

export const SET_AUTHED_USER: string = 'SET_AUTHED_USER'
export const LOG_OUT: string = 'LOG_OUT'

export type TokensData = Tokens

export interface DecodedUser extends User {
  [propName: string]: any;
}

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}

// ACTIONS TYPES
interface SetAuthedUserAction {
  type: typeof SET_AUTHED_USER
  payload: User
}

interface LogOutAction {
  type: typeof LOG_OUT
  payload: null
}

export type UserActionTypes = SetAuthedUserAction | LogOutAction

// STATE TYPE
export interface NotLoggedUser {
  isLoggedIn: false;
  user: null;
}

export interface LoggedUser {
  isLoggedIn: true;
  user: User;
}

export type UserState = NotLoggedUser | LoggedUser
