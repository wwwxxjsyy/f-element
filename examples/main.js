import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//导入组件
// import SongUI from "../packages/index";

//注册组件
// Vue.use(SongUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
