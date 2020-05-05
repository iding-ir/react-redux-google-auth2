import React, { Component } from "react";

import GoogleAuth2 from "./googleAuth2";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Profile from "./profile";

class App extends Component {
  render() {
    return (
      <>
        <GoogleAuth2 clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com" />

        <SignIn text="Login" classes="login" />

        <SignOut text="Logout" classes="logout" />

        <Profile />
      </>
    );
  }
}

export default App;
