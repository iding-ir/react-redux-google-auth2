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
    type: _constants.SIGN_OUT,
    payload: {
      user: null
    }
  };
};

exports.signOut = signOut;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2dvb2dsZUF1dGgyLnRzIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZXIiLCJ0eXBlIiwiU0lHTl9JTiIsInBheWxvYWQiLCJzaWduT3V0IiwiU0lHTl9PVVQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQTZCO0FBQ2pELFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFQyxrQkFERDtBQUVMQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUgsTUFBQUEsSUFBSSxFQUFKQTtBQUFGO0FBRkosR0FBUDtBQUlELENBTE07Ozs7QUFPQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFtQjtBQUN4QyxTQUFPO0FBQ0xILElBQUFBLElBQUksRUFBRUksbUJBREQ7QUFFTEYsSUFBQUEsT0FBTyxFQUFFO0FBQUVILE1BQUFBLElBQUksRUFBRTtBQUFSO0FBRkosR0FBUDtBQUlELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTSUdOX0lOLCBTSUdOX09VVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0dvb2dsZUF1dGgyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25Vc2VyIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZDogeyB1c2VyOiBVc2VyIHwgbnVsbCB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbkluID0gKHVzZXI6IFVzZXIpOiBJQWN0aW9uVXNlciA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05fSU4sXHJcbiAgICBwYXlsb2FkOiB7IHVzZXIgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKTogSUFjdGlvblVzZXIgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOX09VVCxcclxuICAgIHBheWxvYWQ6IHsgdXNlcjogbnVsbCB9LFxyXG4gIH07XHJcbn07XHJcbiJdfQ==