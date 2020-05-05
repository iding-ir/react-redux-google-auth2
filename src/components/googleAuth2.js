import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signIn, signOut } from "../actions/googleAuth2";
import loadScript from "../utils/loadScript";

export class GoogleAuth2 extends Component {
  componentDidMount() {
    const { url, clientId, scope } = this.props;

    loadScript(url).then(() => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({ clientId, scope }).then(() => {
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
      const profile = this.auth.currentUser.get().getBasicProfile();

      const id = profile.getId();
      const name = profile.getName();
      const email = profile.getEmail();
      const image = profile.getImageUrl();

      const user = { id, name, email, image };

      signIn(user);
    } else {
      signOut();
    }
  };

  render() {
    return "";
  }
}

GoogleAuth2.defaultProps = {
  url: "https://apis.google.com/js/api.js",
  scope: "email",
};

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
  user: state.googleAuth2.user,
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
