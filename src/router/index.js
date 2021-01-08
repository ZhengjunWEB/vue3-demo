import { createRouter, createWebHistory } from 'vue-router'
import business from './modules/business'
// import Home from '@/views/Home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home/index.vue'),
    children:[
      {
        path:'overview',
        name: 'overview',
        component: () => import('@/views/overview/index.vue')
      },
      ...business
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
