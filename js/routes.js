
import HomePage from '../pages/home.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import SettingsPage from '../pages/settings.f7.html';
import water from '../pages/water.f7.html';
import waterSet from '../pages/waterSettings.f7.html';
import avaChange from '../comps/avaChange.f7.html';
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
    path: '/catalog/',
    component: CatalogPage, 
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
  },


  {
    path: '/water/',
    component: water, 
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
  
];

export default routes;