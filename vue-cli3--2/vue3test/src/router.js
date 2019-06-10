/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    // { path: '*', component: () => import('./views/404.vue') },
    { path: '/', redirect: '/home', component: () => import('./views/home.vue') },
    { path: '/home', name: 'home', component: () => import('./views/home.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('from', from)
  next()
})

export default router