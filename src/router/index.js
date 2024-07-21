import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/vs',
      component: () => import('../views/VsView.vue')
    },
    {
      path: '/winner',
      component: () => import('../views/WinnerView.vue')
    }
  ]
})

export default router
