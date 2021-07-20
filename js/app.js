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


var app = new Framework7({
  name: 'cats', // App name
  theme: 'ios', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
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
    
  },
});

window.state=store.state
window.app=app
// store.state.appData.desktop = Framework7.device.desktop;
// store.state.appData.theme = Framework7.device.prefersColorScheme();

import { dataControl } from './dataControl'; dataControl(app, store)

store.state.appData.desktop = Framework7.device.desktop||Framework7.device.ipad?
  true:false
store.state.appData.theme = Framework7.device.prefersColorScheme();
if (Framework7.device.prefersColorScheme()=='dark') {
  document.body.classList+='theme-dark'
}

//отменяет перетаскивание мышкой ссылок и картинок
$(document).on("dragstart", 'img, a', function(event) { event.preventDefault(); }); 

app.on('e-appMount', ()=>{
  document.getElementById('appCss97').innerHTML=`
  <style>
  .page-content{
    padding-left:${document.querySelector('.menu').offsetWidth}px
  }
  </style>`
})



import { waterControl } from './waterControl'; waterControl(app, store)