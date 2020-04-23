import React, { Component } from "react";

import GoogleAuth2 from "./googleAuth2";

class App extends Component {
  render() {
    const signInComponent = <button>Sign In</button>;
    const signOutComponent = <button>Sign Out</button>;

    return (
      <div>
        <GoogleAuth2
          clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com"
          signInComponent={signInComponent}
          signOutComponent={signOutComponent}
        />
      </div>
    );
  }
}

export default App;
