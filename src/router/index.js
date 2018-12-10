import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue'),
      meta:{ title: '首页'}
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "Info" */ '@/views/Info/index.vue'),
      meta:{ title: '资讯'}
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* webpackChunkName: "Mine" */ '@/views/Mine/index.vue'),
      meta:{ title: '个人中心'}
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import(/* webpackChunkName: "Detail" */ '@/views/Detail/index.vue'),
      meta:{ title: '产品列表'}
    }
  ]
})
