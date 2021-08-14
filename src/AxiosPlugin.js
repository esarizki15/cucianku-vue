import axios from 'axios';

export default {
  install(Vue, config) {
    //console.log('IN-AXIOS-PLUGIN', Vue.prototype);
    Vue.prototype.$axios = axios.create(config);
  },
};
