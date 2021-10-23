
import HomePage from '../pages/home.f7.html';
import navigatorPage from '../pages/navigator.f7.html';
import SettingsPage from '../pages/settings.f7.html';
import water from '../pages/water.f7.html';
import mood from '../pages/mood.f7.html';
import waterSet from '../pages/waterSettings.f7.html';
import appSet from '../pages/appSettings.f7.html';
import moodWidgetSet from '../pages/moodWidgetSettings.f7.html';
import waterWidgetSet from '../pages/waterWidgetSettings.f7.html';
import avaChange from '../comps/avaChange.f7.html';
import lvlTeach from '../pages/lvlTeach.f7.html';
import Framework7 from 'framework7/bundle';

let transition = 'f7-parallax'
if (Framework7.device == 'desktop' || Framework7.device == 'ipad' || window.innerWidth >=750) {
  transition = 'f7-circle'
}

var routes = [


  
  {
    path: '/',
    component: HomePage,  
    options: {
      transition: transition,
    },
  },
  {
    path: '/navigator/',
    component: navigatorPage, 
    options: {
      transition: transition,
    },
    
  },
  {
    path: '/settings/',
    component: SettingsPage,  
    options: {
      transition: transition,
    },
    on: {
      pageInit: function (event, page) {
       console.log(44);
      },
    }
  },


  {
    path: '/water/',
    component: water, 
    options: {
      transition: transition,
    },
  },
  {
    path: '/mood/',
    component: mood, 
    options: {
      transition: transition,
    },
  },
  {
    path: '/waterSet/',
    component: waterSet,  
    options: {
      transition: transition,
    },
  },
  {
    path: '/appSet/',
    component: appSet,  
    options: {
      transition: transition,
    },
  },
  {
    path: '/moodWidgetSet/',
    component: moodWidgetSet,  
    options: {
      transition: transition,
    },
  },
  {
    path: '/waterWidgetSet/',
    component: waterWidgetSet,  
    options: {
      transition: transition,
    },
  },


  {
    path: '/popup-content/',  
    options: {
      transition: transition,
    },
    popup: {
      component: avaChange,
      closeOnEscape: true,
      swipeHandler:'#avaChangeHandler',
      swipeToClose:'to-bottom'
    }
  },
  {
    path: '/lvlTeach/',  
    options: {
      transition: transition,
    },
    popup: {
      component: lvlTeach,
      closeOnEscape: true,
      swipeHandler:'#lvlTeachHandler',
      swipeToClose:'to-bottom'
    }
  },
  
];

export default routes;