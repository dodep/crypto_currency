import Vue from 'vue'
import VueRouter from 'vue-router'
import TheDom from '../views/TheDom.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'TheDom',
    component: TheDom
  },
  {
    path: '/pairs',
    name: 'ThePairs',
    component: () => import('../views/ThePairs.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/TheNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
