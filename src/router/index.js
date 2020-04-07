import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    component: () => import('@/views/account/Login')
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '',
        component: () => import('@/views/system/Manage')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
