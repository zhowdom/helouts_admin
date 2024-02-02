import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import environment from '@/components/environment'
import electric from '@/components/electric'
import instrument from '@/components/instrument'
import energy from '@/components/energy'
import security from '@/components/security'
import business from '@/components/business'
import robot from '@/components/robot'
import login from '@/components/login'

Vue.use(Router)

const newRouter =  new Router({
  routes: [
    {
      path: '/',
      name: 'indexDefault',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/environment',
      name: 'environment',
      component: environment
    },
    {
      path: '/electric',
      name: 'electric',
      component: electric
    },
    {
      path: '/instrument',
      name: 'instrument',
      component: instrument
    },
    {
      path: '/energy',
      name: 'energy',
      component: energy
    },
    {
      path: '/security',
      name: 'security',
      component: security
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/robot',
      name: 'robot',
      component: robot
    }
  ]
})

// newRouter.beforeEach((to, from, next) => {
//   // to 将要访问的路径  from 从哪个路径跳转过来  next 一个函数，表示放行
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default newRouter
