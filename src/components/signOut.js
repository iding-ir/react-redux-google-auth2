import React, { Component } from "react";
import { connect } from "react-redux";

import { authInstance } from "./googleAuth2";

class SignOut extends Component {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === true) {
      return (
        <button className={classes} onClick={authInstance.signOut}>
          {text}
        </button>
      );
    }

    return null;
  }
}

SignOut.defaultProps = {
  text: "Sign out",
  classes: "",
};

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
});

export default connect(mapStateToProps, {})(SignOut);
