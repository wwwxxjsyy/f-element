// 为组件提供 install 方法，供组件对外按需引入
import SongTest from "./src/main";

SongTest.install = Vue => {
  Vue.component(SongTest.name, SongTest);
};

export default SongTest;