import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signIn, signOut } from "../actions/googleAuth2";
import loadScript from "../utils/loadScript";

class GoogleAuth2 extends Component {
  componentDidMount() {
    loadScript("https://apis.google.com/js/api.js").then(() => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId: this.props.clientId,
            scope: "email",
          })
          .then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();

            this.onAuthChange(this.auth.isSignedIn.get());

            this.auth.isSignedIn.listen(this.onAuthChange);
          });
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props;

    if (isSignedIn) {
      signIn();
    } else {
      signOut();
    }
  };

  render() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return <button onClick={this.auth.signOut}>Sign out</button>;
    } else {
      return <button onClick={this.auth.signIn}>Sign in</button>;
    }
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      signIn,
      signOut,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth2);
