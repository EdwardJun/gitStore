import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')