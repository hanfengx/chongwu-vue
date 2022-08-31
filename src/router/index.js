import { createRouter, createWebHashHistory } from 'vue-router'
import LoginHome from '../views/LoginHome.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginHome
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LoginRegistered.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
