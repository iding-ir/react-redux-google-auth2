import React, { Component } from "react";
import { connect } from "react-redux";

import { authInstance } from "./googleAuth2";

class SignIn extends Component {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === false) {
      return (
        <button className={classes} onClick={authInstance.signIn}>
          {text}
        </button>
      );
    }

    return null;
  }
}

SignIn.defaultProps = {
  text: "Sign in",
  classes: "",
};

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
});

export default connect(mapStateToProps, {})(SignIn);
