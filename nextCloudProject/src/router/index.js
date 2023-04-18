import { createRouter, createWebHistory } from 'vue-router'
import Slideshow from "@/views/Slideshow.vue";

const router = createRouter({
  history: createWebHistory("/project/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slideshow,
    },
  ]
})

export default router
