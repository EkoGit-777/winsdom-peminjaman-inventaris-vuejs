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
      component: () => import('../views/admin/HomeView.vue')
    },
    {
      path: '/admin/editprofile',
      name: 'editProfileAdmin',
      component: () => import('../views/admin/FormEditProfileView.vue')
    },
    {
      path: '/admin/users',
      name: 'usersAdmin',
      component: () => import('../views/admin/UsersMenuView.vue')
    },
    {
      path: '/admin/users/edituser/:id',
      // path: '/admin/users/edituser',
      name: 'editUserAdmin',
      component: () => import('../views/admin/FormEditUserView.vue')
    },
    {
      path: '/admin/history',
      name: 'historyAdmin',
      component: () => import('../views/admin/HistoryMenuView.vue')
    },
    {
      path: '/admin/inventory',
      name: 'inventoryAdmin',
      component: () => import('../views/admin/InventoryMenuView.vue')
    },
    {
      path: '/admin/inventory/tambahinventory',
      name: 'tambahInventoryAdmin',
      component: () => import('../views/admin/FormTambahInventoryView.vue')
    },
    {
      path: '/admin/inventory/:id',
      // path: '/admin/inventory/inventorydetail',
      name: 'inventoryDetailAdmin',
      component: () => import('../views/admin/InventoryDetailView.vue')
    },
    {
      path: '/admin/inventory/editinventory/:id',
      // path: '/admin/inventory/editinventory',
      name: 'editInventoryAdmin',
      component: () => import('../views/admin/FormEditInventoryView.vue')
    },
    {
      path: '/admin/peminjaman',
      name: 'peminjamanAdmin',
      component: () => import('../views/admin/PeminjamanMenuView.vue')
    },


    //Router Untuk User
    {
      path: '/',
      name: 'home',
      component: () => import('../views/user/HomeView.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/user/HistoryMenuView.vue')
    },
    {
      path: '/peminjaman',
      name: 'peminjaman',
      component: () => import('../views/user/PeminjamanMenuView.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/user/InventoryMenuView.vue')
    },
    {
      path: '/inventory/form-peminjaman',
      name: 'form-peminjaman',
      component: () => import('../views/user/FormPeminjamanView.vue')
    },
    {
      path: '/editprofile',
      name: 'editProfileUser',
      component: () => import('../views/user/FormEditProfileView.vue')
    }

  ]
})

export default router
