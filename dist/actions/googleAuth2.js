"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signOut = exports.signIn = void 0;

var _constants = require("../constants");

var signIn = function signIn(user) {
  return {
    type: _constants.SIGN_IN,
    payload: {
      user: user
    }
  };
};

exports.signIn = signIn;

var signOut = function signOut() {
  return {
    type: _constants.SIGN_OUT
  };
};

exports.signOut = signOut;