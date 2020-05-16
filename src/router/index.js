import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../components/Store.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ProductDetails from '../components/ProductDetails.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'mainpage',
        component: Store
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductDetails
    },
    {
        path: '/cart',
        component: ShoppingCart,
        name: 'shoppingcart'
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        onlyGuest: true
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        onlyGuest: true
    },
    {
        path: '*',
        redirect: '/'
	}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
