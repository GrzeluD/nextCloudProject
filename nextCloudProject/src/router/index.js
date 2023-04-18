import { createRouter, createWebHistory } from 'vue-router'
import Slideshow from "@/views/Slideshow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slideshow,
    },
  ]
})

export default router
