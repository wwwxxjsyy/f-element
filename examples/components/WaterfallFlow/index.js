// 为组件提供 install 方法，供组件对外按需引入
import WaterfallFlow from './src/main'

WaterfallFlow.install = Vue => {
  Vue.component(WaterfallFlow.name, WaterfallFlow)
}

export default WaterfallFlow
