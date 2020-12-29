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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6WyJjb21iaW5lZFJlZHVjZXJzIiwiZ29vZ2xlQXV0aDIiLCJnb29nbGVBdXRoMlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQU1BLElBQU1BLGdCQUFnQixHQUFHLDRCQUFnQjtBQUN2Q0MsRUFBQUEsV0FBVyxFQUFFQztBQUQwQixDQUFoQixDQUF6QjtlQUllRixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IGdvb2dsZUF1dGgyUmVkdWNlciwgeyBJU3RhdGVHb29nbGVBdXRoMiB9IGZyb20gXCIuL2dvb2dsZUF1dGgyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgZ29vZ2xlQXV0aDI6IElTdGF0ZUdvb2dsZUF1dGgyO1xyXG59XHJcblxyXG5jb25zdCBjb21iaW5lZFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBnb29nbGVBdXRoMjogZ29vZ2xlQXV0aDJSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVkUmVkdWNlcnM7XHJcbiJdfQ==