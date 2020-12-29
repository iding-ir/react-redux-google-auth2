import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { signIn, signOut } from "../actions/googleAuth2";
import loadScript from "../utils/loadScript";

declare global {
  interface Window { gapi: any; }
}

export let authInstance: any;

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

const GoogleAuth2 = (props: Props) => {
  const dispatch = useDispatch();

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      const profile = authInstance.currentUser.get().getBasicProfile();

      const id = profile.getId();
      const name = profile.getName();
      const email = profile.getEmail();
      const image = profile.getImageUrl();

      const user = { id, name, email, image };

      dispatch(signIn(user));
    } else {
      dispatch(signOut());
    }
  };

  useEffect(() => {
    const { url, clientId, scope } = props;

    loadScript(url).then(() => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({ clientId, scope }).then(() => {
          authInstance = window.gapi.auth2.getAuthInstance();

          onAuthChange(authInstance.isSignedIn.get());

          authInstance.isSignedIn.listen(onAuthChange);
        });
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

GoogleAuth2.defaultProps = {
  url: "https://apis.google.com/js/api.js",
  scope: "email",
};

export default GoogleAuth2;
