import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ()=>import('../views/home.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: ()=>import('../views/article.vue')
    },

  ]
})

export default router
