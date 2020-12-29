"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.authInstance = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _googleAuth = require("../actions/googleAuth2");

var _loadScript = _interopRequireDefault(require("../utils/loadScript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authInstance;
exports.authInstance = authInstance;

var GoogleAuth2 = function GoogleAuth2(props) {
  var dispatch = (0, _reactRedux.useDispatch)();

  var onAuthChange = function onAuthChange(isSignedIn) {
    if (isSignedIn) {
      var profile = authInstance.currentUser.get().getBasicProfile();
      var id = profile.getId();
      var name = profile.getName();
      var email = profile.getEmail();
      var image = profile.getImageUrl();
      var user = {
        id: id,
        name: name,
        email: email,
        image: image
      };
      dispatch((0, _googleAuth.signIn)(user));
    } else {
      dispatch((0, _googleAuth.signOut)());
    }
  };

  (0, _react.useEffect)(function () {
    var url = props.url,
        clientId = props.clientId,
        scope = props.scope;
    (0, _loadScript.default)(url).then(function () {
      window.gapi.load("client:auth2", function () {
        window.gapi.client.init({
          clientId: clientId,
          scope: scope
        }).then(function () {
          exports.authInstance = authInstance = window.gapi.auth2.getAuthInstance();
          onAuthChange(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen(onAuthChange);
        });
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

GoogleAuth2.defaultProps = {
  url: "https://apis.google.com/js/api.js",
  scope: "email"
};
var _default = GoogleAuth2;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dvb2dsZUF1dGgyLnRzeCJdLCJuYW1lcyI6WyJhdXRoSW5zdGFuY2UiLCJHb29nbGVBdXRoMiIsInByb3BzIiwiZGlzcGF0Y2giLCJvbkF1dGhDaGFuZ2UiLCJpc1NpZ25lZEluIiwicHJvZmlsZSIsImN1cnJlbnRVc2VyIiwiZ2V0IiwiZ2V0QmFzaWNQcm9maWxlIiwiaWQiLCJnZXRJZCIsIm5hbWUiLCJnZXROYW1lIiwiZW1haWwiLCJnZXRFbWFpbCIsImltYWdlIiwiZ2V0SW1hZ2VVcmwiLCJ1c2VyIiwidXJsIiwiY2xpZW50SWQiLCJzY29wZSIsInRoZW4iLCJ3aW5kb3ciLCJnYXBpIiwibG9hZCIsImNsaWVudCIsImluaXQiLCJhdXRoMiIsImdldEF1dGhJbnN0YW5jZSIsImxpc3RlbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7O0FBTU8sSUFBSUEsWUFBSjs7O0FBZVAsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFrQjtBQUNwQyxNQUFNQyxRQUFRLEdBQUcsOEJBQWpCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFVBQUQsRUFBeUI7QUFDNUMsUUFBSUEsVUFBSixFQUFnQjtBQUNkLFVBQU1DLE9BQU8sR0FBR04sWUFBWSxDQUFDTyxXQUFiLENBQXlCQyxHQUF6QixHQUErQkMsZUFBL0IsRUFBaEI7QUFFQSxVQUFNQyxFQUFFLEdBQUdKLE9BQU8sQ0FBQ0ssS0FBUixFQUFYO0FBQ0EsVUFBTUMsSUFBSSxHQUFHTixPQUFPLENBQUNPLE9BQVIsRUFBYjtBQUNBLFVBQU1DLEtBQUssR0FBR1IsT0FBTyxDQUFDUyxRQUFSLEVBQWQ7QUFDQSxVQUFNQyxLQUFLLEdBQUdWLE9BQU8sQ0FBQ1csV0FBUixFQUFkO0FBRUEsVUFBTUMsSUFBSSxHQUFHO0FBQUVSLFFBQUFBLEVBQUUsRUFBRkEsRUFBRjtBQUFNRSxRQUFBQSxJQUFJLEVBQUpBLElBQU47QUFBWUUsUUFBQUEsS0FBSyxFQUFMQSxLQUFaO0FBQW1CRSxRQUFBQSxLQUFLLEVBQUxBO0FBQW5CLE9BQWI7QUFFQWIsTUFBQUEsUUFBUSxDQUFDLHdCQUFPZSxJQUFQLENBQUQsQ0FBUjtBQUNELEtBWEQsTUFXTztBQUNMZixNQUFBQSxRQUFRLENBQUMsMEJBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FmRDs7QUFpQkEsd0JBQVUsWUFBTTtBQUFBLFFBQ05nQixHQURNLEdBQ21CakIsS0FEbkIsQ0FDTmlCLEdBRE07QUFBQSxRQUNEQyxRQURDLEdBQ21CbEIsS0FEbkIsQ0FDRGtCLFFBREM7QUFBQSxRQUNTQyxLQURULEdBQ21CbkIsS0FEbkIsQ0FDU21CLEtBRFQ7QUFHZCw2QkFBV0YsR0FBWCxFQUFnQkcsSUFBaEIsQ0FBcUIsWUFBTTtBQUN6QkMsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlDLElBQVosQ0FBaUIsY0FBakIsRUFBaUMsWUFBTTtBQUNyQ0YsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlFLE1BQVosQ0FBbUJDLElBQW5CLENBQXdCO0FBQUVQLFVBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZQyxVQUFBQSxLQUFLLEVBQUxBO0FBQVosU0FBeEIsRUFBNkNDLElBQTdDLENBQWtELFlBQU07QUFDdEQsaUNBQUF0QixZQUFZLEdBQUd1QixNQUFNLENBQUNDLElBQVAsQ0FBWUksS0FBWixDQUFrQkMsZUFBbEIsRUFBZjtBQUVBekIsVUFBQUEsWUFBWSxDQUFDSixZQUFZLENBQUNLLFVBQWIsQ0FBd0JHLEdBQXhCLEVBQUQsQ0FBWjtBQUVBUixVQUFBQSxZQUFZLENBQUNLLFVBQWIsQ0FBd0J5QixNQUF4QixDQUErQjFCLFlBQS9CO0FBQ0QsU0FORDtBQU9ELE9BUkQ7QUFTRCxLQVZELEVBSGMsQ0FjaEI7QUFDQyxHQWZELEVBZUcsRUFmSDtBQWlCQSxTQUFPLElBQVA7QUFDRCxDQXRDRDs7QUF3Q0FILFdBQVcsQ0FBQzhCLFlBQVosR0FBMkI7QUFDekJaLEVBQUFBLEdBQUcsRUFBRSxtQ0FEb0I7QUFFekJFLEVBQUFBLEtBQUssRUFBRTtBQUZrQixDQUEzQjtlQUtlcEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIi4uL2FjdGlvbnMvZ29vZ2xlQXV0aDJcIjtcclxuaW1wb3J0IGxvYWRTY3JpcHQgZnJvbSBcIi4uL3V0aWxzL2xvYWRTY3JpcHRcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgV2luZG93IHsgZ2FwaTogYW55OyB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYXV0aEluc3RhbmNlOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1cmw6IHN0cmluZztcclxuICBjbGllbnRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHNjb3BlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEdvb2dsZUF1dGgyID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25BdXRoQ2hhbmdlID0gKGlzU2lnbmVkSW46IGJvb2xlYW4pID0+IHtcclxuICAgIGlmIChpc1NpZ25lZEluKSB7XHJcbiAgICAgIGNvbnN0IHByb2ZpbGUgPSBhdXRoSW5zdGFuY2UuY3VycmVudFVzZXIuZ2V0KCkuZ2V0QmFzaWNQcm9maWxlKCk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHByb2ZpbGUuZ2V0SWQoKTtcclxuICAgICAgY29uc3QgbmFtZSA9IHByb2ZpbGUuZ2V0TmFtZSgpO1xyXG4gICAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZ2V0RW1haWwoKTtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBwcm9maWxlLmdldEltYWdlVXJsKCk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0geyBpZCwgbmFtZSwgZW1haWwsIGltYWdlIH07XHJcblxyXG4gICAgICBkaXNwYXRjaChzaWduSW4odXNlcikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goc2lnbk91dCgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyB1cmwsIGNsaWVudElkLCBzY29wZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgbG9hZFNjcmlwdCh1cmwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZ2FwaS5sb2FkKFwiY2xpZW50OmF1dGgyXCIsICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuZ2FwaS5jbGllbnQuaW5pdCh7IGNsaWVudElkLCBzY29wZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGF1dGhJbnN0YW5jZSA9IHdpbmRvdy5nYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpO1xyXG5cclxuICAgICAgICAgIG9uQXV0aENoYW5nZShhdXRoSW5zdGFuY2UuaXNTaWduZWRJbi5nZXQoKSk7XHJcblxyXG4gICAgICAgICAgYXV0aEluc3RhbmNlLmlzU2lnbmVkSW4ubGlzdGVuKG9uQXV0aENoYW5nZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5Hb29nbGVBdXRoMi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdXJsOiBcImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL2FwaS5qc1wiLFxyXG4gIHNjb3BlOiBcImVtYWlsXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBdXRoMjtcclxuIl19