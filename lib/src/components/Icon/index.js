"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      status = _ref.status,
      transparent = _ref.transparent,
      props = _objectWithoutProperties(_ref, ["icon", "size", "status", "transparent"]);

  var className = (0, _classnames.default)("nes-icon", icon, size && "is-".concat(size), status && "is-".concat(status), {
    transparent: transparent
  });
  return _react.default.createElement("i", _extends({
    className: className
  }, props));
};

Icon.propTypes = {
  icon: _propTypes.default.oneOf(["heart", "star", "like", "twitter", "facebook", "github", "youtube", "google", "medium", "twitch", "reddit", "whatsapp", "gmail", "linkedin", "close", "trophy"]).isRequired,
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  status: _propTypes.default.oneOf(["half", "empty"]),
  transparent: _propTypes.default.bool
};
var _default = Icon;
exports.default = _default;