import { IActionUser } from "../actions/googleAuth2";
import { User } from "../components/GoogleAuth2";
export interface IStateGoogleAuth2 {
    isSignedIn: boolean;
    user: User;
}
declare const reducer: (state: {
    isSignedIn: null;
    user: null;
} | undefined, action: IActionUser) => {
    isSignedIn: null;
    user: null;
} | {
    isSignedIn: boolean;
    user: User | null;
};
export default reducer;
//# sourceMappingURL=googleAuth2.d.ts.map