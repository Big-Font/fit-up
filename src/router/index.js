import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "Info" */ '@/views/Info/index.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "Mine" */ '@/views/Mine/index.vue')
    }
  ]
})
