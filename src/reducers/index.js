import { combineReducers } from "redux";

import googleAuth2Reducer from "./googleAuth2";

const combinedReducers = combineReducers({
  googleAuth2: googleAuth2Reducer,
});

export default combinedReducers;
