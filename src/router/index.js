import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Bebidas',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Pizza',
    name: 'pizza',
    component: () => import('../views/PizzaView.vue')
  },
  {
    path: '/Pasteles',
    name: 'pasteles',
    component: () => import('../views/PastelesView.vue')
  },
  {
    path: '/Carrito',
    name: 'carrito',
    component: () => import('../views/CarritoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
