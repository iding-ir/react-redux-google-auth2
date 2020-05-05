import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
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

Card.defaultProps = {
  classes: "",
};

const mapStateToProps = (state) => ({
  isSignedIn: state.googleAuth2.isSignedIn,
  user: state.googleAuth2.user,
});

export default connect(mapStateToProps, {})(Card);
