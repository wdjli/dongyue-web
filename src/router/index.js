import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Featured from '../views/Featured.vue'
import Plugins from '../views/Plugins.vue'
import Download from '../views/Download.vue'
import Customize from '../views/Customize.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/featured',
    name: 'Featured',
    component: Featured
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/customize',
    name: 'Customize',
    component: Customize
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

