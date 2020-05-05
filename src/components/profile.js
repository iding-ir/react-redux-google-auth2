import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { isSignedIn, user, classes } = this.props;

    if (isSignedIn === true) {
      return (
        <div className={classes}>
          <img src={user.image} alt={user.name} />

          <span>{user.name}</span>
        </div>
      );
    }

    return "";
  }
}

Profile.defaultProps = {
  classes: "",
};

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
  user: state.googleAuth2.user,
});

export default connect(mapStateToProps, {})(Profile);
