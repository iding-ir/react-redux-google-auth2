import { SIGN_IN, SIGN_OUT } from "../constants";

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
};

export const googleAuth2Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
