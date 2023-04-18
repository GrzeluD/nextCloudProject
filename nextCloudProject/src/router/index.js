import { createRouter, createWebHistory } from 'vue-router'
import Slideshow from "@/views/Slideshow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slideshow,
    },
  ]
})

export default router
