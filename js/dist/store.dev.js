"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _framework = require("framework7");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _framework.createStore)({
  state: {
    appData: {
      weatherClicks: 0,
      xpFromWaterStreak: 100,
      rihtClickTeachTime: 0,
      pressCupTeachTime: 0
    },
    userData: {
      name: '',
      ava: 'static/img/avas/l1/ava2.webp',
      water: {
        todayMl: 0,
        streak: 0,
        goal: 1500,
        lastUpdate: false,
        yesterdayStreak: 0
      },
      teach: {
        widgetPress: false
      }
    },
    gf: {
      bounse: function bounse(el) {
        el.style.transform = 'scale(1.1)';
        setTimeout(function () {
          el.style.transform = '';
        }, 200);
      },
      support_format_webp: function support_format_webp() {
        var elem = document.createElement("canvas");
        return !(!elem.getContext || !elem.getContext("2d")) && 0 == elem.toDataURL("image/webp").indexOf("data:image/webp");
      },
      getRandomInRange: function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getCookie: function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : void 0;
      },
      setCookie: function setCookie(name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (options = _objectSpread({
          path: "/"
        }, options)).expires instanceof Date && (options.expires = options.expires.toUTCString());
        var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (var optionKey in options) {
          updatedCookie += "; " + optionKey;
          var optionValue = options[optionKey];
          !0 !== optionValue && (updatedCookie += "=" + optionValue);
        }

        document.cookie = updatedCookie;
      },
      vibrate: function vibrate(ms) {
        /**
         * Вибрация
         * @param {number | array} ms длительность вибрации 
         */
        var canVibrate = window.navigator.vibrate;
        if (canVibrate) window.navigator.vibrate(ms);
      }
    }
  },
  getters: {
    products: function products(_ref) {
      var state = _ref.state;
      return state.products;
    }
  },
  actions: {
    addProduct: function addProduct(_ref2, product) {
      var state = _ref2.state;
      state.products = [].concat(_toConsumableArray(state.products), [product]);
    }
  }
});
var _default = store;
exports["default"] = _default;