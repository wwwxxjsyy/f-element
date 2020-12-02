// 为组件提供 install 方法，供组件对外按需引入
import ShrButton from "./src/main";

ShrButton.install = Vue => {
  Vue.component(ShrButton.name, ShrButton);
};

export default ShrButton;