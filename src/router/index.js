import { createRouter, createWebHistory } from 'vue-router'
import frontPageView from '../views/frontPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: frontPageView,
    },
  ],
})

export default router
