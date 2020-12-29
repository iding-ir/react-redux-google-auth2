"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.authInstance = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _googleAuth = require("../actions/googleAuth2");

var _loadScript = _interopRequireDefault(require("../utils/loadScript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authInstance;
exports.authInstance = authInstance;

var GoogleAuth2 = /*#__PURE__*/function (_Component) {
  _inherits(GoogleAuth2, _Component);

  var _super = _createSuper(GoogleAuth2);

  function GoogleAuth2() {
    var _this;

    _classCallCheck(this, GoogleAuth2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onAuthChange", function (isSignedIn) {
      var _this$props = _this.props,
          signIn = _this$props.signIn,
          signOut = _this$props.signOut;

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
        signIn(user);
      } else {
        signOut();
      }
    });

    return _this;
  }

  _createClass(GoogleAuth2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          url = _this$props2.url,
          clientId = _this$props2.clientId,
          scope = _this$props2.scope;
      (0, _loadScript.default)(url).then(function () {
        window.gapi.load("client:auth2", function () {
          window.gapi.client.init({
            clientId: clientId,
            scope: scope
          }).then(function () {
            exports.authInstance = authInstance = window.gapi.auth2.getAuthInstance();

            _this2.onAuthChange(authInstance.isSignedIn.get());

            authInstance.isSignedIn.listen(_this2.onAuthChange);
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return GoogleAuth2;
}(_react.Component);

GoogleAuth2.defaultProps = {
  url: "https://apis.google.com/js/api.js",
  scope: "email"
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isSignedIn: state.googleAuth2.isSignedIn,
    user: state.googleAuth2.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    signIn: _googleAuth.signIn,
    signOut: _googleAuth.signOut
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GoogleAuth2);

exports.default = _default;