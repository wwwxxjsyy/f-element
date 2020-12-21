// 为组件提供 install 方法，供组件对外按需引入
import ImgUrl from "./src/main";

ImgUrl.install = Vue => {
  Vue.component(ImgUrl.name, ImgUrl);
};

export default ImgUrl;