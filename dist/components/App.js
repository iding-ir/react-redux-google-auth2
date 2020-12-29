"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GoogleAuth = _interopRequireDefault(require("./GoogleAuth2"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _SignOut = _interopRequireDefault(require("./SignOut"));

var _Profile = _interopRequireDefault(require("./Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_GoogleAuth.default, {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID
  }), /*#__PURE__*/_react.default.createElement(_Profile.default, {
    className: "profile"
  }), /*#__PURE__*/_react.default.createElement(_SignIn.default, {
    text: "Login",
    className: "button"
  }), /*#__PURE__*/_react.default.createElement(_SignOut.default, {
    text: "Logout",
    className: "button"
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC50c3giXSwibmFtZXMiOlsiQXBwIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9HT09HTEVfQ0xJRU5UX0lEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSw2QkFBQyxtQkFBRDtBQUFhLElBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFBbkMsSUFERixlQUdFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUM7QUFBbkIsSUFIRixlQUtFLDZCQUFDLGVBQUQ7QUFBUSxJQUFBLElBQUksRUFBQyxPQUFiO0FBQXFCLElBQUEsU0FBUyxFQUFDO0FBQS9CLElBTEYsZUFPRSw2QkFBQyxnQkFBRDtBQUFTLElBQUEsSUFBSSxFQUFDLFFBQWQ7QUFBdUIsSUFBQSxTQUFTLEVBQUM7QUFBakMsSUFQRixDQURGO0FBV0QsQ0FaRDs7ZUFjZUgsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBHb29nbGVBdXRoMiBmcm9tIFwiLi9Hb29nbGVBdXRoMlwiO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25JblwiO1xyXG5pbXBvcnQgU2lnbk91dCBmcm9tIFwiLi9TaWduT3V0XCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuL1Byb2ZpbGVcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPEdvb2dsZUF1dGgyIGNsaWVudElkPXtwcm9jZXNzLmVudi5SRUFDVF9BUFBfR09PR0xFX0NMSUVOVF9JRH0gLz5cclxuXHJcbiAgICAgIDxQcm9maWxlIGNsYXNzTmFtZT1cInByb2ZpbGVcIiAvPlxyXG5cclxuICAgICAgPFNpZ25JbiB0ZXh0PVwiTG9naW5cIiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxyXG5cclxuICAgICAgPFNpZ25PdXQgdGV4dD1cIkxvZ291dFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=