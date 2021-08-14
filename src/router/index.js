import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Verifikasi from '@/views/Verifikasi.vue'
import Layout1 from '@/views/layouts/Layout1.vue'
import Layout2 from '@/views/layouts/Layout2.vue'
import Layout3 from '@/views/layouts/Layout3.vue'
import SuccessRegisIndex from '@/views/SuccessRegisIndex.vue'
import PromoPage from '@/views/PromoPage.vue'
import DetailPromo from '@/views/DetailPromo.vue'
import MulaiMencuci from '@/views/MulaiMencuci.vue'
import DataDiri from '@/views/DataDiri.vue'
import Lokasi from '@/views/Lokasi.vue'
import OrderPage from '@/views/OrderPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/success-regis',
    name: 'Layout1',
    component: Layout1,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'SuccessRegisIndex',
        component: SuccessRegisIndex,
      },
      {
        path: '/promo-page',
        name: 'PromoPage',
        component: PromoPage,
      },
      {
        path: '/detail-promo',
        name: 'DetailPromo',
        component: DetailPromo,
      },
      {
        path: '/order-page',
        name: 'OrderPage',
        component: OrderPage,
      },
      {
        path: '/checkout-page',
        name: 'CheckoutPage',
        component: CheckoutPage,
      },
    ],
  },
  {
    path: '/data-diri',
    name: 'Layout2',
    component: Layout2,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'DataDiri',
        component: DataDiri,
      },
      {
        path: '/sesuaikan-lokasi',
        name: 'Lokasi',
        component: Lokasi,
      },
      {
        path: '/mulai-mencuci',
        name: 'MulaiMencuci',
        component: MulaiMencuci,
      },
    ],
  },
  {
    path: '/auth',
    name: 'Layout3',
    component: Layout3,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Login',
        component: Login,
      },
      {
        path: '/verifikasi',
        name: 'Verifikasi',
        component: Verifikasi,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
