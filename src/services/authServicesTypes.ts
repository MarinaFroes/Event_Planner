import { User, Tokens } from '../store/types';

export type TokensData = Tokens

export interface DecodedUser extends User {
  [propName: string]: any;
}

export interface UserData extends Tokens {
  authedUserData: DecodedUser;
}