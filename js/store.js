
import { createStore } from 'framework7';

const store = createStore({
  state: {
    appData:{
      weatherClicks:0,
      xpFromWaterStreak:100,
      rihtClickTeachTime:0,
      pressCupTeachTime:0,
      lastMoodWrite:0,
      view:0,
      mood:{},
      yourText:{}
    },
    userData:{
      name:'',
      ava:'static/img/avas/l1/ava2.webp',
      moodTextarea:'',
      navigator:{
        skills:[
          {
            name:'кіт',
            color:'90, 204, 168',
            d:[{
              name:'каво',
              lvl:4,
              exp:120
            },
            {
              name:'никаво',
              lvl:2,
              exp:120
            },
            {
              name:'чево',
              lvl:1,
              exp:120
            },
            {
              name:'ничево',
              lvl:2,
              exp:120
            },
            {
              name:'ааа аа',
              lvl:5,
              exp:120
            },]
          }
        ]
      },
      water:{
        todayMl:0,
        streak:0,
        goal:1500,
        lastUpdate:false,
        yesterdayStreak:0,
        cup1:100,
        cup2:200,
        cup3:300
      },
      mood:{
        emojies:['😢','🙁','🙂','😄', '+'],
        emojiChanges:0,
        lastEmojies:[],
        days:[
          
          
        ]
      },
      teach:{
        widgetPress:false,
        deleteMood:false
      },
      pref:{
        blur:'blur',
        color:'#5acca8',
        colorRgb:'90, 204, 168',
        theme:'auto'
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
        if (typeof(ms)=="string") {
          switch (ms) {
            case 'lil success':
              ms=[15,8, 30]
            break;
            case 'big success':
              ms=[20,10,25,10,30]
            break;
            case 'success':
              ms=[15,7,20,7,20]
            break;
            case 'big fail':
              ms=[20,8, 20,8, 20,50, 20]
            break;
            case 'fail':
              ms=[30,8, 20,100, 30]
            break;
            case 'warn':
              ms=[20,20, 20,20, 20,90, 20]
            break;
          
            default:
              break;
          }
          
        }
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
