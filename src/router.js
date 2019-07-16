import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/profile',
      name: 'profile',
      component: function () { 
        return import('./views/Profile.vue')
      }
    },
    {
      path: '/chatform',
      name: 'chatform',
      component: function () { 
        return import('./views/ChatForm.vue')
      }
    }
  ]
})
