import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { isSignedIn, user, classes, onClick } = this.props;

    if (isSignedIn === true) {
      return (
        <div className={classes} onClick={onClick}>
          <img src={user.image} alt={user.name} title={user.name} />

          <span title={user.email}>{user.name}</span>
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
