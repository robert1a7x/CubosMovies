import { createRouter, createWebHistory } from 'vue-router'
import movieList from '../views/movieList.vue'
import movieDetails from '../views/movieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Movie List',
      component: movieList
    },
    {
      path: '/movie/:id',
      name: 'Movie Details',
      component: movieDetails
    }
  ]
})

export default router
