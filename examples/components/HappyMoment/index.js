// 为组件提供 install 方法，供组件对外按需引入
import HappyMoment from "./src/css";

HappyMoment.install = Vue => {
  Vue.component(HappyMoment.name, HappyMoment);
};

export default HappyMoment;