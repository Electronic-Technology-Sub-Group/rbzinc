import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
      { 
        path:'/login',
        component: () =>import('../views/login/LoginPage.vue') 
      },
      { 
        path:'/',
        component:() =>import('../Layout/index.vue')
      },
      {
        path:'/poet',
        component:() =>import('../views/poet/poet.vue')
      },
      {
        path:'/poetryAi',
        component:() =>import('../views/poetryAi/poetryAi.vue')
      },
      {
        path: '/register',
        component: () => import('../views/register/register.vue')
      }
  ]
})

export default router