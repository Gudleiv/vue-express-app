import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
