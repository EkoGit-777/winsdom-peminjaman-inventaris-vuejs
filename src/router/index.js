import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue')    
    },

    //Router Untuk Admin
    {
      path: '/Admin/',
      name: 'homeAdmin',
      component: () => import('../views/Admin/HomeView.vue')
    },
    {
      path: '/Admin/Users',
      name: 'usersAdmin',
      component: () => import('../views/Admin/UsersMenuView.vue')
    },

    //Router Untuk User
    {
      path: '/',
      name: 'home',
      component: () => import('../views/User/HomeView.vue')
    }

  ]
})

export default router
