import { createRouter, createWebHistory } from 'vue-router'
import Slideshow from "@/views/Slideshow.vue";

const production = "/project/";

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? production : import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Slideshow,
    },
  ]
})

export default router
