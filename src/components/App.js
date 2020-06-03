import React, { Component } from "react";

import GoogleAuth2 from "./GoogleAuth2";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Profile from "./Profile";

class App extends Component {
  render() {
    const onClick = () => {
      alert("onClick callback");
    };

    return (
      <div className="app">
        <GoogleAuth2 clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} />

        <Profile classes="profile" onClick={onClick} />

        <SignIn text="Login" classes="button" />

        <SignOut text="Logout" classes="button" />
      </div>
    );
  }
}

export default App;
