import Vue from 'vue'
import other from './other.vue'
import router from './router/index.js'
console.log('other----------')
new Vue({ router, render: h => h(other) }).$mount('#other')