import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios"
import VueLazyload from 'vue-lazyload'
//导入组件
import ShrUI from "@src";
import components from "./utils/components";

//注册组件
Vue.use(ShrUI);
Vue.use(ElementUI);
Vue.use(components);
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/loading.png',
  loading: '/img/loading.png',
  attempt: 1
})

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
