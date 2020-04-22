import { SIGN_IN, SIGN_OUT } from "../constants";

export const signIn = () => {
  return {
    tpye: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    tpye: SIGN_OUT,
  };
};
