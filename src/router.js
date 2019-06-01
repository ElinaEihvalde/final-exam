import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/visit-us',
      name: 'visit-us',
      component: () => import('./views/Visit.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog-page.vue')
    },

    {
      path: '/blog/:id',
      name: 'post',
      props: true,
      component: () => import('./components/blog/single-post.vue')
    },

    {
      path: '/create-blog',
      name: 'crete-blog',
      component: () => import('./views/create-blog.vue'),
     
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin.vue')
    },
  ]
})