import React, { Component } from "react";

import GoogleAuth2 from "./googleAuth2";
import SignIn from "./signIn";
import SignOut from "./signOut";
import Profile from "./profile";

class App extends Component {
  render() {
    const onClick = () => {
      alert("onClick callback");
    };

    return (
      <div className="app">
        <GoogleAuth2 clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com" />

        <Profile classes="profile" onClick={onClick} />

        <SignIn text="Login" classes="button" />

        <SignOut text="Logout" classes="button" />
      </div>
    );
  }
}

export default App;
