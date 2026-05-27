import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'

import HomePage from '../components/HomePage.vue'
import FamiliaView from '../views/FamiliaView.vue'
import RecursosLibrosView from '../views/RecursosLibrosView.vue'
import RecursosView from '../views/RecursosView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/familia', name: 'Familia', component: FamiliaView },
  { path: '/recursos-libros', name: 'RecursosLibros', component: RecursosLibrosView },
  { path: '/recursos', name: 'Recursos', component: RecursosView },
  { path: '/blog', name: 'Blog', component: BlogView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
