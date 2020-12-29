import { combineReducers } from "redux";

import googleAuth2Reducer, { IStateGoogleAuth2 } from "./googleAuth2";

export interface IState {
  googleAuth2: IStateGoogleAuth2;
}

const combinedReducers = combineReducers({
  googleAuth2: googleAuth2Reducer,
});

export default combinedReducers;
