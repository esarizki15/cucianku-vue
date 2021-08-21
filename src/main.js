import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import {
  BootstrapVue, IconsPlugin
}
from 'bootstrap-vue'
import '@/assets/scss/animate.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'
import helperMixin from './mixins/helper';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import * as GmapVue from 'gmap-vue';
import vSelect from 'vue-select';
import "vue-select/src/scss/vue-select.scss";

Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer " +
    token
}
Vue.prototype.$baseUrl = 'https://destinasi-wisata.herokuapp.com/api/';
Vue.use(BootstrapVue, {
  formControls: {
    size: 'md',
  },
});
// Vue.use(VueGoogleMap, {
//   load: {
//     apiKey: 'AIzaSyAoHZpg4l8-P_mVOppKvVwBpjaUicWtM6k',
//     libraries: ['places,drawing,visualization']
//   }
// })

Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyAoHZpg4l8-P_mVOppKvVwBpjaUicWtM6k',
    libraries: 'places,drawing,visualization', // This is required if you use the Autocomplete plugin
  },
  installComponents: false,
});
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
// helperMixin
Vue.mixin(helperMixin);

Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
