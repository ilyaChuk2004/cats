"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _homeF = _interopRequireDefault(require("../pages/home.f7.html"));

var _catalogF = _interopRequireDefault(require("../pages/catalog.f7.html"));

var _settingsF = _interopRequireDefault(require("../pages/settings.f7.html"));

var _waterF = _interopRequireDefault(require("../pages/water.f7.html"));

var _moodF = _interopRequireDefault(require("../pages/mood.f7.html"));

var _waterSettingsF = _interopRequireDefault(require("../pages/waterSettings.f7.html"));

var _moodSettingsF = _interopRequireDefault(require("../pages/moodSettings.f7.html"));

var _avaChangeF = _interopRequireDefault(require("../comps/avaChange.f7.html"));

var _bundle = _interopRequireDefault(require("framework7/bundle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transition = 'f7-parallax';

if (_bundle["default"].device == 'desktop' || _bundle["default"].device == 'ipad' || window.innerWidth >= 750) {
  transition = 'f7-circle';
}

var routes = [{
  path: '/',
  component: _homeF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/catalog/',
  component: _catalogF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/settings/',
  component: _settingsF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/water/',
  component: _waterF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/mood/',
  component: _moodF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/waterSet/',
  component: _waterSettingsF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/moodSet/',
  component: _moodSettingsF["default"],
  options: {
    transition: transition
  }
}, {
  path: '/popup-content/',
  options: {
    transition: transition
  },
  popup: {
    component: _avaChangeF["default"],
    closeOnEscape: true,
    swipeHandler: '#avaChangeHandler',
    swipeToClose: 'to-bottom'
  }
}];
var _default = routes;
exports["default"] = _default;