import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PathPreview from '../views/PathPreview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/l/:id',
    name: 'PathPreview',
    component: PathPreview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
