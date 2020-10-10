import { Tokens } from '../types'
import { DecodedUser } from '../types'

export type TokensData = Tokens

export interface UserData extends Tokens {
  authedUserData: DecodedUser
}
