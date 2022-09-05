import { createRouter, createWebHashHistory } from 'vue-router';
import LoginHome from '../views/LoginHome.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginHome,
    meta: {
      title: '登录页面',
    },
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LoginRegistered.vue')
  // }
  {
    path: '/MainPet',
    name: 'MainPet',
    meta: {
      title: '主页面',
    },
    component: () => import('../views/MainPet.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
