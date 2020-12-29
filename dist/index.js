"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _stores = _interopRequireDefault(require("./stores"));

var _App = _interopRequireDefault(require("./components/App"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _stores.default
}, /*#__PURE__*/_react.default.createElement(_App.default, null)), document.getElementById("root"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJzdG9yZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsa0JBQVNDLE1BQVQsZUFDRSw2QkFBQyxvQkFBRDtBQUFVLEVBQUEsS0FBSyxFQUFFQztBQUFqQixnQkFDRSw2QkFBQyxZQUFELE9BREYsQ0FERixFQUlFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FKRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZXNcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEFwcCAvPlxyXG4gIDwvUHJvdmlkZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xyXG4iXX0=