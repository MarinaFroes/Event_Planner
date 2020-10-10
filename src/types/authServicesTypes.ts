import { Tokens } from '../types/reduxTypes'
import { DecodedUser } from '../types/reduxTypes'

export type TokensData = Tokens

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}
