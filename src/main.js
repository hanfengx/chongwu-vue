import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-plus';
import 'element-plus/theme-chalk/index.css';

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [
  function (data) {
    let ret = '';
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
    }
    return ret;
  },
];

//让请求携带上浏览器的cookie
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8080'; //封装默认路径
createApp(App)
  .use(router)
  .use(store)
  .use(ElementUI)
  .use(VueAxios, axios)
  .mount('#app');
