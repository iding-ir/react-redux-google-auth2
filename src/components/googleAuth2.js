import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signIn, signOut } from "../actions/googleAuth2";
import loadScript from "../utils/loadScript";

let authInstance;

class GoogleAuth2 extends Component {
  componentDidMount() {
    const { url, clientId, scope } = this.props;

    loadScript(url).then(() => {
      window.gapi.load("client:auth2", () => {
        window.gapi.client.init({ clientId, scope }).then(() => {
          authInstance = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(authInstance.isSignedIn.get());

          authInstance.isSignedIn.listen(this.onAuthChange);
        });
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props;

    if (isSignedIn) {
      const profile = authInstance.currentUser.get().getBasicProfile();

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

class _SignIn extends Component {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === false) {
      return (
        <button className={classes} onClick={authInstance.signIn}>
          {text}
        </button>
      );
    }

    return "";
  }
}

_SignIn.defaultProps = {
  text: "Sign in",
  classes: "",
};

export const SignIn = connect(mapStateToProps, mapDispatchToProps)(_SignIn);

class _SignOut extends Component {
  render() {
    const { isSignedIn, text, classes } = this.props;

    if (isSignedIn === true) {
      return (
        <button className={classes} onClick={authInstance.signOut}>
          {text}
        </button>
      );
    }

    return "";
  }
}

_SignOut.defaultProps = {
  text: "Sign out",
  classes: "",
};

export const SignOut = connect(mapStateToProps, mapDispatchToProps)(_SignOut);

class _Card extends Component {
  render() {
    const { isSignedIn, user, classes } = this.props;

    if (isSignedIn === true) {
      return (
        <div className={classes}>
          <div>
            <img src={user.image} alt={user.name} />
          </div>

          <span>{user.name}</span>
        </div>
      );
    }

    return "";
  }
}

_Card.defaultProps = {
  classes: "",
};

export const Card = connect(mapStateToProps, mapDispatchToProps)(_Card);
