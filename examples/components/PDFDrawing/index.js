// 为组件提供 install 方法，供组件对外按需引入
import Drawing from "./src/main";

Drawing.install = Vue => {
  Vue.component(Drawing.name, Drawing);
};

export default Drawing;