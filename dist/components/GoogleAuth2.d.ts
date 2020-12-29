declare global {
    interface Window {
        gapi: any;
    }
}
export declare let authInstance: any;
export interface User {
    id: string;
    name: string;
    email: string;
    image: string;
}
interface Props {
    url: string;
    clientId: string | undefined;
    scope: string;
}
declare const GoogleAuth2: {
    (props: Props): null;
    defaultProps: {
        url: string;
        scope: string;
    };
};
export default GoogleAuth2;
//# sourceMappingURL=GoogleAuth2.d.ts.map