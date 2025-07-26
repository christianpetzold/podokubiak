import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import Impressum from '@/components/Impressum.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/impressum', name: 'Impressum', component: Impressum },
]

const base = import.meta.env.MODE === 'production' ? '/podokubiak/' : '/'

const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})



export default router
