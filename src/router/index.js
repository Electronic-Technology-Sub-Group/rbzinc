import { createRouter, createWebHistory } from 'vue-router'

import VueRouter from 'vue-router'
VueRouter.use(VueRouter)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
      { path:'/login',component:() =>import('../views/login/LoginPage.vue') },
      { path:'/register',component:() =>import('../views/register/register.vue') }
  ]
})
router.beforeEach((to) => {
  const useStore = useUserStore()
  if (!useStore.token && to.path !== '/login') return '/login'
})
export default router