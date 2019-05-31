import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Visit from './views/Visit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    path: '/visit-us',
    name: 'visit-us',
    component: Visit
  },
    {
      path: '/',
      name: 'admin',
      component: () => import( './views/admin.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
