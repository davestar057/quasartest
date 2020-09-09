import Vue from 'vue'
import axios from 'axios'
import {Store} from "src/store";

Vue.prototype.$axios = axios
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const axiosInstance  = axios.create({
  baseURL: 'http://quasarapi.kabaddle.com/'
})


// for use inside Vue files through this.$axios
Vue.prototype.$axios = axiosInstance
Vue.prototype.$axios.defaults.withCredentials = true;
Vue.prototype.$axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance }

