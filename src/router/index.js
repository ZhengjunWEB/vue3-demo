import { createRouter, createWebHistory } from 'vue-router'
import business from './modules/business'
import charts from './modules/charts'
// import Home from '@/views/Home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home/overview'
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
      ...business,
      ...charts

    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
