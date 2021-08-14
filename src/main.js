import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'
Vue.config.productionTip = false

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer "+token
}
Vue.prototype.$baseUrl = 'https://destinasi-wisata.herokuapp.com/api/';
Vue.use(BootstrapVue, {
  formControls: {
    size: 'md',
  },
});
Vue.use(VueGoogleMap, {
  load: {
      apiKey: 'AIzaSyAoHZpg4l8-P_mVOppKvVwBpjaUicWtM6k',
      libraries: ['places,drawing,visualization']
  }
})
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
