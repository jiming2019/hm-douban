import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import '@/assets/css/global.css'
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')