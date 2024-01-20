import { createRouter, createWebHistory } from 'vue-router'
import movieList from '../views/movieList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movieList',
      component: movieList
    }
  ]
})

export default router
