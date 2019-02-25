import Vue from 'vue'
import Router from 'vue-router'
// import Global from '../libs/global'
// import store from '../store/index' // 直接引入的方式
// import Club from '@/components/Club'

Vue.use(Router)
console.log('router-------------')
// let _global = Global.data

let pageRouterOption = [
  { path: '/', redirect: '/index1' },
  {
    path: '/index1',
    name: 'Index1',
    // component: Club
    meta: { title: 'Index1' },
    /* component (resolve) {
      require(['../page/home.vue'], resolve)
    } */
    component (resolve) {
      require.ensure([], () => resolve(require('../page/index1.vue')))
    }
  },
  {
    path: '/other1',
    name: 'Other1',
    // component: Club
    meta: { title: 'other1' },
    component (resolve) {
      // require(['../page/home2.vue'], resolve)
      require.ensure([], () => resolve(require('../page/other1.vue')))
    }
  }
]

let router = new Router({
  routes: pageRouterOption
})

router.beforeEach((to, from, next) => {
  _global.loading = true
  if (to.meta.title) {
    document.title = to.meta.title
  }
  return next()
})

export default router
