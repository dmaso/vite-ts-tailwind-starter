import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import HomeLayout from '@/layouts/HomeLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// Pages
import HomePage from '@/pages/HomePage.vue'
import DashboardIndexPage from '@/pages/dashboard/DashboardIndexPage.vue'
// We can import other dashboard pages like WealthPage, HealthPage later

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
        meta: { title: "Welcome to Dave's Dash" },
      },
      // Future public pages like /login, /signup can go here as children of HomeLayout
    ],
  },
  {
    path: '/dash',
    component: DashboardLayout,
    // meta: { requiresAuth: true }, // We will add this later for auth
    children: [
      {
        path: '', // This will make it /dash/
        name: 'DashboardHome',
        component: DashboardIndexPage,
        meta: { title: 'Dashboard Overview' },
      },
      // Future dashboard pages like /dash/wealth, /dash/health can go here
      // Example: { path: 'wealth', name: 'Wealth', component: () => import('@/pages/dashboard/WealthPage.vue'), meta: { title: 'Wealth' } },
    ],
  },
  // Fallback for 404 - you might want to create a dedicated NotFoundPage.vue
  // For now, we can redirect to home or just let it be (Vue Router shows a blank page by default)
  // {
  // path: '/:pathMatch(.*)*',
  // name: 'NotFound',
  // component: () => import('@/pages/NotFoundPage.vue') // Create this page
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
