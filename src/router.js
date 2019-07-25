import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Catalog from './components/Catalog';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { hideHeader: true },
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog,
    },
  ],
});
