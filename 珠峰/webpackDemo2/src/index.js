import Vue from 'vue'
import index from './index.vue'
import router from './router/index.js'
console.log('index.js-------')
new Vue({ router, render: h => h(index) }).$mount('#app')

// console.log('index.js')

// import 'bootstrap'
// import '@/style.css'

// let url = ''
// if (NODE_ENV === 'development') {
//   url = 'http://localhost:3000'
// } else {
//   url = 'http://www.zhufeng.cn'
// }
// console.log(url)

// let xhr = new XMLHttpRequest()

// xhr.open('GET', 'api/user', true)

// xhr.onload = function () {
//   console.log(xhr.response)
// }

// xhr.send()

// console.log('home')

// class Log {
//   constructor () {
//     console.lo('出错了')
//   }
// }

// let log = new Log()