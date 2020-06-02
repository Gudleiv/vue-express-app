// import Vue from 'vue'

import VueRouter from 'vue-router'
import Main from '@/components/HelloWorld'
import Register from '@/components/Register'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history'
})
