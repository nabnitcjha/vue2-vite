import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router