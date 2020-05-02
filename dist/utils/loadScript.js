"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(src) {
  return new Promise(function (resolve, reject) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;

    script.onload = function () {
      resolve();
    };

    head.appendChild(script);
  });
};

exports.default = _default;