import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path     : '/users',
      name     : 'Users',
      component: () => import('../views/Users.vue'),
  },
   {
      path: '/raiting',
      name: 'Соц рейтинг',
      component: () => import('../views/Raiting.vue')
  },
  {
      path: '/products',
      name: 'Товары',
      component: () => import('../views/Products.vue')
  },
  {
      path: '/products-bin',
      name: 'Корзина',
      component: () => import('../views/ProductsBin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
