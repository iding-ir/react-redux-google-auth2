import { compose } from "redux";
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
declare const store: import("redux").Store<import("redux").CombinedState<{
    googleAuth2: never;
}>, import("../actions/googleAuth2").IActionUser> & {
    dispatch: unknown;
};
export default store;
//# sourceMappingURL=index.d.ts.map