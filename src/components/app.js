import React, { Component } from "react";

import GoogleAuth2 from "./googleAuth2";

class App extends Component {
  render() {
    return (
      <div>
        <GoogleAuth2 clientId="978371680949-7iclvimbtnkiqncnnbf4v7tiibtt5vnp.apps.googleusercontent.com" />
      </div>
    );
  }
}

export default App;
