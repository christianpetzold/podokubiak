import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: About },
]

const base = import.meta.env.MODE === 'production' ? '/podokubiak/' : '/'

const router = createRouter({
  history: createWebHistory(base),
  routes,
})

export default router
