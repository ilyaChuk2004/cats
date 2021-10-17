"use strict";

var _dom = _interopRequireDefault(require("dom7"));

var _bundle = _interopRequireDefault(require("framework7/bundle"));

require("framework7/framework7-bundle.css");

require("../css/icons.css");

require("../css/app.css");

var _routes = _interopRequireDefault(require("./routes.js"));

var _store = _interopRequireDefault(require("./store.js"));

var _appF = _interopRequireDefault(require("../app.f7.html"));

var _searchbar = _interopRequireDefault(require("framework7/components/searchbar"));

var _calendar = _interopRequireDefault(require("framework7/components/calendar"));

var _popup = _interopRequireDefault(require("framework7/components/popup"));

var _dataControl = require("./dataControl");

var _waterControl = require("./waterControl");

var _globalEvents = require("./globalEvents");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Install F7 Components using .use() method on Framework7 class:
_bundle["default"].use([_searchbar["default"], _calendar["default"], _popup["default"]]);

var app = new _bundle["default"]({
  name: 'ToYou',
  // App name
  theme: 'ios',
  // Automatic theme detection
  el: '#app',
  // App root element
  component: _appF["default"],
  // App main component
  // App store
  store: _store["default"],
  // App routes
  routes: _routes["default"],
  // Register service worker
  serviceWorker: {
    path: './service-worker.js',
    scope: '/catsTest/'
  },
  touch: {
    tapHold: true,
    //enable tap hold events
    mdTouchRipple: true,
    iosTouchRipple: true,
    auroraTouchRipple: true,
    disableContextMenu: true,
    touchRippleElements: '.ripple, .ripple-dark-white'
  },
  view: {
    // browserHistory:true,
    stackPages: true,
    browserHistorySeparator: '#' // browserHistoryRoot:'i',
    // iosSwipeBackActiveArea:70

  }
});
window.state = _store["default"].state;
window.app = app; // store.state.appData.desktop = Framework7.device.desktop;
// store.state.appData.theme = Framework7.device.prefersColorScheme();

(0, _dataControl.dataControl)(app, _store["default"]);
_store["default"].state.appData.desktop = _bundle["default"].device.desktop || _bundle["default"].device.ipad ? true : false;
_store["default"].state.appData.desktop = window.innerWidth <= 900 ? false : true;

if (_store["default"].state.userData.pref.theme == 'auto') {
  _store["default"].state.appData.theme = _bundle["default"].device.prefersColorScheme();
} else if (_store["default"].state.userData.pref.theme == 'dark') {
  _store["default"].state.appData.theme = 'dark';
} else if (_store["default"].state.userData.pref.theme == 'light') {
  _store["default"].state.appData.theme = 'light';
}

var oldTheme = document.body.classList.value;

function changeTheme() {
  if (_store["default"].state.userData.pref.theme == 'auto') {
    if (_bundle["default"].device.prefersColorScheme() == 'dark' && !_toConsumableArray(document.body.classList).includes('theme-dark')) {
      document.body.classList.add('theme-dark');
    } else if (_bundle["default"].device.prefersColorScheme() !== 'dark') {
      (0, _dom["default"])('body').removeClass('theme-dark');
    }
  } else {
    if (_store["default"].state.userData.pref.theme == 'dark') {
      (0, _dom["default"])('body').addClass('theme-dark');
    } else if (_store["default"].state.userData.pref.theme == 'light') {
      (0, _dom["default"])('body').removeClass('theme-dark');
    }
  }

  if (oldTheme !== document.body.classList.value) {
    app.emit('e-themeChanged');
    oldTheme = document.body.classList.value;
  }
}

changeTheme();
setInterval(function () {
  changeTheme();
}, 1000);
(0, _waterControl.waterControl)(app, _store["default"]);
(0, _globalEvents.globalEvents)(app, _store["default"], _dom["default"]);
document.body.setAttribute('data-blur', _store["default"].state.userData.pref.blur);

if (_store["default"].state.userData.pref.color == undefined) {
  _store["default"].state.userData.pref.color = '#5acca8';
}

app.on('serviceWorkerRegisterSuccess', function (e) {
  console.log(e);
});
app.on('serviceWorkerRegisterError', function (e) {
  console.log(e);
});