import { User } from "../components/GoogleAuth2";
export interface IActionUser {
    type: string;
    payload: {
        user: User | null;
    };
}
export declare const signIn: (user: User) => IActionUser;
export declare const signOut: () => IActionUser;
//# sourceMappingURL=googleAuth2.d.ts.map