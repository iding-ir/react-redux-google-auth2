import { IStateGoogleAuth2 } from "./googleAuth2";
export interface IState {
    googleAuth2: IStateGoogleAuth2;
}
declare const combinedReducers: import("redux").Reducer<import("redux").CombinedState<{
    googleAuth2: never;
}>, import("../actions/googleAuth2").IActionUser>;
export default combinedReducers;
//# sourceMappingURL=index.d.ts.map