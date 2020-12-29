import { SIGN_IN, SIGN_OUT } from "../constants";
import { IActionUser } from "../actions/googleAuth2";
import { User } from "../components/GoogleAuth2";

export interface IStateGoogleAuth2 {
  isSignedIn: boolean,
  user: User,
}

const initialState = {
  isSignedIn: null,
  user: null,
};

const reducer = (state = initialState, action: IActionUser) => {
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

export default reducer;
