"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isSignedIn: null,
  user: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SIGN_IN:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSignedIn: true,
        user: action.payload.user
      });

    case _constants.SIGN_OUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        isSignedIn: false,
        user: null
      });

    default:
      return state;
  }
};

var _default = reducer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9nb29nbGVBdXRoMi50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc1NpZ25lZEluIiwidXNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTSUdOX0lOIiwicGF5bG9hZCIsIlNJR05fT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBU0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxVQUFVLEVBQUUsSUFETztBQUVuQkMsRUFBQUEsSUFBSSxFQUFFO0FBRmEsQ0FBckI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBK0M7QUFBQSxNQUE5Q0MsS0FBOEMsdUVBQXRDSixZQUFzQztBQUFBLE1BQXhCSyxNQUF3Qjs7QUFDN0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0Msa0JBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFSCxRQUFBQSxVQUFVLEVBQUUsSUFGZDtBQUdFQyxRQUFBQSxJQUFJLEVBQUVHLE1BQU0sQ0FBQ0csT0FBUCxDQUFlTjtBQUh2Qjs7QUFLRixTQUFLTyxtQkFBTDtBQUNFLDZDQUNLTCxLQURMO0FBRUVILFFBQUFBLFVBQVUsRUFBRSxLQUZkO0FBR0VDLFFBQUFBLElBQUksRUFBRTtBQUhSOztBQUtGO0FBQ0UsYUFBT0UsS0FBUDtBQWRKO0FBZ0JELENBakJEOztlQW1CZUQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNJR05fSU4sIFNJR05fT1VUIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJQWN0aW9uVXNlciB9IGZyb20gXCIuLi9hY3Rpb25zL2dvb2dsZUF1dGgyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Hb29nbGVBdXRoMlwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGVHb29nbGVBdXRoMiB7XHJcbiAgaXNTaWduZWRJbjogYm9vbGVhbixcclxuICB1c2VyOiBVc2VyLFxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTaWduZWRJbjogbnVsbCxcclxuICB1c2VyOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBJQWN0aW9uVXNlcikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0lHTl9JTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZ25lZEluOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fT1VUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lnbmVkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl19