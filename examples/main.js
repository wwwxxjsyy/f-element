import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//导入组件
import ShrUI from "@src";
import components from "./utils/components";

//注册组件
Vue.use(ShrUI);
Vue.use(ElementUI);
Vue.use(components);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
