import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import authGuard from './authGuard'



Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      component: () => import( './views/Blog-page.vue')
    },

    {
      path: '/blog/:id',
      name: 'post',
      props: true,
      component: () => import('./components/blog/single-post.vue')
    },
    {
      path: '/visit-us/:id',
      name: 'visit-us-guesthouse'
    },
    {
      path: '/create-blog',
      name: 'crete-blog',
      component: () => import('./views/create-blog.vue'),
      beforeEnter: authGuard
    },

    
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/admin.vue')
    },
  ]
  
})