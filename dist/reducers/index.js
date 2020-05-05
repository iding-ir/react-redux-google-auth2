"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _googleAuth = _interopRequireDefault(require("./googleAuth2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combinedReducers = (0, _redux.combineReducers)({
  googleAuth2: _googleAuth.default
});
var _default = combinedReducers;
exports.default = _default;