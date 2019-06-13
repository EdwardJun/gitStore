import Vue from 'vue'
import App from './App.vue'
import axios from './plugins/axios'
import router from './router.js'
import './scss/common/index.scss'
import { Button, Icon, Popup } from 'vant'

Vue.prototype.$axios = axios

Vue.use(Button)
Vue.use(Icon)
Vue.use(Popup)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
