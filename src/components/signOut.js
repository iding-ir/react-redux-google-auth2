import React from "react";
import { connect } from "react-redux";

import { GoogleAuth2 } from "./googleAuth2";

class SignOut extends GoogleAuth2 {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === true) {
      return (
        <button className={classes} onClick={this.auth.signOut}>
          {text}
        </button>
      );
    }

    return "";
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
