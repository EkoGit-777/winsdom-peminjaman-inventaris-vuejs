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
      path: '/admin/',
      name: 'homeAdmin',
      component: () => import('../views/Admin/HomeView.vue')
    },
    {
      path: '/admin/users',
      name: 'usersAdmin',
      component: () => import('../views/Admin/UsersMenuView.vue')
    },
    {
      path: '/admin/users/tambahuser',
      name: 'tambahUserAdmin',
      component: () => import('../views/Admin/FormTambahUserView.vue')
    },
    {
      path: '/admin/users/edituser',
      name: 'editUserAdmin',
      component: () => import('../views/Admin/FormEditUserView.vue')
    },
    {
      path: '/admin/history',
      name: 'historyAdmin',
      component: () => import('../views/Admin/HistoryMenuView.vue')
    },
    {
      path: '/admin/inventory',
      name: 'inventoryAdmin',
      component: () => import('../views/Admin/InventoryMenuView.vue')
    },
    {
      path: '/admin/inventory/tambahinventory',
      name: 'tambahInventoryAdmin',
      component: () => import('../views/Admin/FormTambahInventoryView.vue')
    },
    {
      path: '/admin/inventory/editinventory',
      name: 'editInventoryAdmin',
      component: () => import('../views/Admin/FormEditInventoryView.vue')
    },
    {
      path: '/admin/peminjaman',
      name: 'peminjamanAdmin',
      component: () => import('../views/Admin/PeminjamanMenuView.vue')
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
