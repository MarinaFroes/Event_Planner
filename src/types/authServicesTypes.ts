import { Tokens } from '../store/types'
import { DecodedUser } from '../store/users/types'

export type TokensData = Tokens

export interface UserData extends Tokens {
  authedUserData: DecodedUser;
}