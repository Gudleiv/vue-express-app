import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

sync(store, router)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
