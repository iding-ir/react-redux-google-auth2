import React from "react";
import { connect } from "react-redux";

import { GoogleAuth2 } from "./googleAuth2";

class SignIn extends GoogleAuth2 {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === false) {
      return (
        <button className={classes} onClick={this.auth.signIn}>
          {text}
        </button>
      );
    }

    return "";
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
