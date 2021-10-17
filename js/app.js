import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';

// Import additional components
import Searchbar from 'framework7/components/searchbar';
import Calendar from 'framework7/components/calendar';
import Popup from 'framework7/components/popup';

// Install F7 Components using .use() method on Framework7 class:
Framework7.use([Searchbar, Calendar, Popup]);


var app = new Framework7({
  name: 'ToYou', // App name
  theme: 'ios', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: './service-worker.js',
    scope: '/catsTest/',
  },

  touch: {
    tapHold: true, //enable tap hold events
    mdTouchRipple:true,
    iosTouchRipple:true,
    auroraTouchRipple:true,
    disableContextMenu:true,
    touchRippleElements:'.ripple, .ripple-dark-white',
  },

  view: {
    // browserHistory:true,
    stackPages:true,
    browserHistorySeparator:'#',
    // browserHistoryRoot:'i',
    // iosSwipeBackActiveArea:70
    
  },
});

window.state=store.state
window.app=app
// store.state.appData.desktop = Framework7.device.desktop;
// store.state.appData.theme = Framework7.device.prefersColorScheme();

import { dataControl } from './dataControl'; dataControl(app, store)

store.state.appData.desktop = Framework7.device.desktop||Framework7.device.ipad?
  true:false
store.state.appData.desktop = window.innerWidth<=900?
  false:true

if (store.state.userData.pref.theme=='auto') {
  store.state.appData.theme=Framework7.device.prefersColorScheme()
}else if(store.state.userData.pref.theme=='dark'){
  store.state.appData.theme='dark'
}else if(store.state.userData.pref.theme=='light'){
  store.state.appData.theme='light'
}

let oldTheme=document.body.classList.value
function changeTheme() {
  if (store.state.userData.pref.theme=='auto') {
    if (Framework7.device.prefersColorScheme() == 'dark' && ![...document.body.classList].includes('theme-dark')) {
      document.body.classList.add('theme-dark');
    } else if (Framework7.device.prefersColorScheme() !== 'dark') {
      $('body').removeClass('theme-dark');
    }
  } else{
    if(store.state.userData.pref.theme=='dark'){
      $('body').addClass('theme-dark');
    }else if(store.state.userData.pref.theme=='light'){
      $('body').removeClass('theme-dark');
    }
  }

  if(oldTheme!==document.body.classList.value){
    app.emit('e-themeChanged')
    oldTheme=document.body.classList.value
  }
}

changeTheme()
setInterval(() => {
  changeTheme();
}, 1000);





import { waterControl } from './waterControl'; waterControl(app, store)
import { globalEvents } from './globalEvents'; globalEvents(app, store, $)

document.body.setAttribute('data-blur', store.state.userData.pref.blur)

if (store.state.userData.pref.color==undefined) {
  store.state.userData.pref.color='#5acca8'
}

app.on('serviceWorkerRegisterSuccess', (e) => {
  console.log(e);
})
app.on('serviceWorkerRegisterError', (e) => {
  console.log(e);
})

