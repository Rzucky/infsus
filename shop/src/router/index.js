import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopForm from '../components/ShopForm.vue'
import EditShop from '../components/EditShop.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createShop',
    name: 'create',
    component: ShopForm
  },
  {
    path: '/edit-shop/',
    name: 'EditShop',
    component: EditShop
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
