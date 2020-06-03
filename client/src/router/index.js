// import Vue from 'vue'

import VueRouter from 'vue-router'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
  mode: 'history'
})
