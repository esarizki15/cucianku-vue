import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Verifikasi from '@/views/Verifikasi.vue'
import Layout1 from '@/views/layouts/Layout1.vue'
import Layout2 from '@/views/layouts/Layout2.vue'
import Layout3 from '@/views/layouts/Layout3.vue'
import Layout4 from '@/views/layouts/Layout4.vue'
import Layout5 from '@/views/layouts/Layout5.vue'
import SuccessRegisIndex from '@/views/SuccessRegisIndex.vue'
import PromoPage from '@/views/PromoPage.vue'
import SesuaikanLokasi from '@/views/SesuaikanLokasi.vue'
import DetailPromo from '@/views/DetailPromo.vue'
import MulaiMencuci from '@/views/MulaiMencuci.vue'
import DataDiri from '@/views/DataDiri.vue'
  // import Lokasi from '@/views/Lokasi.vue'
import OrderPage from '@/views/OrderPage.vue'
import CheckoutPage from '@/views/CheckoutPage.vue'
import DetailOrder from '@/views/DetailOrder.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/layout-1',
  name: 'Layout1',
  component: Layout1,
  redirect: '/success-regis',
  children: [{
    path: '/success-regis',
    name: 'SuccessRegisIndex',
    component: SuccessRegisIndex,
  }],
}, {
  path: '/layout-2',
  name: 'Layout2',
  component: Layout2,
  redirect: '/data-diri',
  children: [{
    path: '/data-diri',
    name: 'DataDiri',
    component: DataDiri,
  }, {
    path: '/mulai-mencuci',
    name: 'MulaiMencuci',
    component: MulaiMencuci,
  }, ],
}, {
  path: '/layout-3',
  name: 'Layout3',
  component: Layout3,
  redirect: '/login',
  children: [{
    path: '/login',
    name: 'Login',
    component: Login,
  }, {
    path: '/verifikasi',
    name: 'Verifikasi',
    component: Verifikasi,
  }, ],
}, {
  path: '/layout-4',
  name: 'Layout4',
  component: Layout4,
  redirect: '/sesuaikan-lokasi',
  children: [{
    path: '/promo-page',
    name: 'PromoPage',
    component: PromoPage,
  }, {
    path: '/detail-promo',
    name: 'DetailPromo',
    component: DetailPromo,
  }, {
    path: '/sesuaikan-lokasi',
    name: 'SesuaikanLokasi',
    component: SesuaikanLokasi,
  }, ],
}, {
  path: '/layout-5',
  name: 'Layout5',
  component: Layout5,
  redirect: '/sesuaikan-lokasi',
  children: [{
    path: '/order-page',
    name: 'OrderPage',
    component: OrderPage,
  }, {
    path: '/checkout-page',
    name: 'CheckoutPage',
    component: CheckoutPage,
  }, {
    path: '/detail-order',
    name: 'DetailOrder',
    component: DetailOrder,
  }, ],
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import ( /* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
  routes
})

export default router
