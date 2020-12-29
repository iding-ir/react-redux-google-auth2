import React from "react";

import GoogleAuth2 from "./GoogleAuth2";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Profile from "./Profile";

const App = () => {
  return (
    <div className="app">
      <GoogleAuth2 clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} />

      <Profile className="profile" />

      <SignIn text="Login" className="button" />

      <SignOut text="Logout" className="button" />
    </div>
  );
};

export default App;
