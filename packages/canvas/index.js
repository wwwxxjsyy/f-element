// 为组件提供 install 方法，供组件对外按需引入
import ShrCanvas from "./src/main";

ShrCanvas.install = Vue => {
  Vue.component(ShrCanvas.name, ShrCanvas);
};

export default ShrCanvas;