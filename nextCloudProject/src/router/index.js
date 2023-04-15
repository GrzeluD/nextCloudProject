import { createRouter, createWebHistory } from 'vue-router'
import Slideshow from "@/views/Slideshow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slideshow,
    },
  ]
})

export default router
