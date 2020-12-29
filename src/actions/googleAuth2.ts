import { SIGN_IN, SIGN_OUT } from "../constants";
import { User } from "../components/GoogleAuth2";

export interface IActionUser {
  type: string;
  payload: { user: User | null };
}

export const signIn = (user: User): IActionUser => {
  return {
    type: SIGN_IN,
    payload: { user },
  };
};

export const signOut = (): IActionUser => {
  return {
    type: SIGN_OUT,
    payload: { user: null },
  };
};
