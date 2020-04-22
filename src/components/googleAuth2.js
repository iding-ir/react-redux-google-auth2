import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signIn, signOut } from "../actions/googleAuth2";

class GoogleAuth2 extends Component {
  componentDidMount() {
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
    const { signIn, signOut } = this.auth;

    const renderer = () => {
      if (isSignedIn === null) {
        return null;
      } else if (isSignedIn) {
        return <button onClick={signOut}>Logout</button>;
      } else {
        return <button onClick={signIn}>Login</button>;
      }
    };

    return <div>{renderer()}</div>;
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
