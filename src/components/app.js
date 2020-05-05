import React, { Component } from "react";

import GoogleAuth2, { SignIn, SignOut, Card } from "./googleAuth2";

class App extends Component {
  render() {
    return (
      <>
        <GoogleAuth2 clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com" />

        <SignIn text="Login" classes="login" />

        <SignOut text="Logout" classes="logout" />

        <Card />
      </>
    );
  }
}

export default App;
