
import { createStore } from 'framework7';

const store = createStore({
  state: {
    appData:{
      weatherClicks:0,
      xpFromWaterStreak:100,
      rihtClickTeachTime:0,
      pressCupTeachTime:0
    },
    userData:{
      name:'',
      ava:'static/img/avas/l1/ava2.webp',
      water:{
        todayMl:0,
        streak:0,
        goal:1500,
        lastUpdate:false,
        yesterdayStreak:0
      },
      teach:{
        widgetPress:false
      }
    },
    gf:{
      bounse(el) {el.style.transform='scale(1.1)';setTimeout(() => {el.style.transform=''}, 200);},
      support_format_webp(){var elem=document.createElement("canvas");return!(!elem.getContext||!elem.getContext("2d"))&&0==elem.toDataURL("image/webp").indexOf("data:image/webp")},
      getRandomInRange(min, max){return Math.floor(Math.random() * (max - min + 1)) + min},
      getCookie(name) {let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : void 0},
      setCookie(name, value, options = {}) {
        (options = {
          path: "/",
          ...options
        }).expires instanceof Date && (options.expires = options.expires.toUTCString());
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          !0 !== optionValue && (updatedCookie += "=" + optionValue)
        }
        document.cookie = updatedCookie
      },
      vibrate(ms){
        /**
         * Вибрация
         * @param {number | array} ms длительность вибрации 
         */
        const canVibrate = window.navigator.vibrate
        if (canVibrate) window.navigator.vibrate(ms)
      },
    },
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
