import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import HeroDetail from './views/HeroDetail.vue';
import Heroes from './views/Heroes.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: HeroDetail,
    },
    {
      path: '/heroes',
      name: 'Heroes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Heroes.vue'),
    },
  ],
});
