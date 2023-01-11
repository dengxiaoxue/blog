import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/essay',
      name: 'Essay',
      component: () => import('../views/Essay.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/Message.vue')
    },
    {
      path: '/study',
      name: 'StudyNotes',
      component: () => import('../views/StudyNotes.vue')
    }
  ]
})

export default router
