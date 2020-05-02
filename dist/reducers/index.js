"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _googleAuth = require("./googleAuth2");

var combinedReducers = (0, _redux.combineReducers)({
  googleAuth2: _googleAuth.googleAuth2Reducer
});
var _default = combinedReducers;
exports.default = _default;