import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from 'js-cookie'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch((err) => {})
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/sso',
    name: 'sso',
    component: () => import('../views/login/sso.vue'),
  },
  {
    path: '/dashborad',
    name: 'dashborad',
    component: () => import('../views/home/dashboard.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/home/user.vue'),
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/home/modify-password.vue'),
  },
  {
    path: '/weld',
    name: 'weld',
    component: () => import('../views/weld/weld.vue'),
    children: [
      {
        path: 'image',
        name: '图片检测',
        component: () => import('../views/weld/Components/weldImage.vue'),
      },
      {
        path: 'user',
        name: '用户管理',
        component: () => import('../views/weld/Components/user.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/error/404.vue'),
  },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
