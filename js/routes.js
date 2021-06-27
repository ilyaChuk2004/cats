
import HomePage from '../pages/home.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import SettingsPage from '../pages/settings.f7.html';
import water from '../pages/water.f7.html';

var routes = [


  
  {
    path: '/',
    id: 'tab1',
    component: HomePage,
  },
  {
    path: '/catalog/',
    id: 'tab2',
    component: CatalogPage,
  },
  {
    path: '/settings/',
    id: 'tab3',
    component: SettingsPage,
  },


  {
    path: '/water/',
    component: water,
  }
  
];

export default routes;