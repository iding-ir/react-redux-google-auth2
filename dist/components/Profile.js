"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function Profile(props) {
  var className = props.className;
  var isSignedIn = (0, _reactRedux.useSelector)(function (state) {
    return state.googleAuth2.isSignedIn;
  });
  var user = (0, _reactRedux.useSelector)(function (state) {
    return state.googleAuth2.user;
  });

  if (isSignedIn === true) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: user.image,
      alt: user.name,
      title: user.name
    }), /*#__PURE__*/_react.default.createElement("span", {
      title: user.email
    }, user.name));
  }

  return null;
};

Profile.defaultProps = {
  className: ""
};
var _default = Profile;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUudHN4Il0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImlzU2lnbmVkSW4iLCJzdGF0ZSIsImdvb2dsZUF1dGgyIiwidXNlciIsImltYWdlIiwibmFtZSIsImVtYWlsIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFTQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQWtCO0FBQUEsTUFDeEJDLFNBRHdCLEdBQ1ZELEtBRFUsQ0FDeEJDLFNBRHdCO0FBR2hDLE1BQU1DLFVBQVUsR0FBRyw2QkFDakIsVUFBQ0MsS0FBRDtBQUFBLFdBQW1CQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JGLFVBQXJDO0FBQUEsR0FEaUIsQ0FBbkI7QUFJQSxNQUFNRyxJQUFJLEdBQUksNkJBQ1osVUFBQ0YsS0FBRDtBQUFBLFdBQW1CQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLElBQXJDO0FBQUEsR0FEWSxDQUFkOztBQUlBLE1BQUlILFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUN2Qix3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFFRDtBQUFoQixvQkFDRTtBQUFLLE1BQUEsR0FBRyxFQUFFSSxJQUFJLENBQUNDLEtBQWY7QUFBc0IsTUFBQSxHQUFHLEVBQUVELElBQUksQ0FBQ0UsSUFBaEM7QUFBc0MsTUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0U7QUFBbEQsTUFERixlQUdFO0FBQU0sTUFBQSxLQUFLLEVBQUVGLElBQUksQ0FBQ0c7QUFBbEIsT0FBMEJILElBQUksQ0FBQ0UsSUFBL0IsQ0FIRixDQURGO0FBT0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBUixPQUFPLENBQUNVLFlBQVIsR0FBdUI7QUFDckJSLEVBQUFBLFNBQVMsRUFBRTtBQURVLENBQXZCO2VBSWVGLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL0dvb2dsZUF1dGgyXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGlzU2lnbmVkSW4gPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogSVN0YXRlKSA9PiBzdGF0ZS5nb29nbGVBdXRoMi5pc1NpZ25lZEluXHJcbiAgKSBhcyBib29sZWFuO1xyXG5cclxuICBjb25zdCB1c2VyID0gKHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBJU3RhdGUpID0+IHN0YXRlLmdvb2dsZUF1dGgyLnVzZXJcclxuICApIGFzIHVua25vd24pIGFzIFVzZXI7XHJcblxyXG4gIGlmIChpc1NpZ25lZEluID09PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8aW1nIHNyYz17dXNlci5pbWFnZX0gYWx0PXt1c2VyLm5hbWV9IHRpdGxlPXt1c2VyLm5hbWV9IC8+XHJcblxyXG4gICAgICAgIDxzcGFuIHRpdGxlPXt1c2VyLmVtYWlsfT57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5Qcm9maWxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6IFwiXCIsXHJcbn0gYXMgUGFydGlhbDxQcm9wcz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXX0=