import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from './api/request.js' // 封装的 http 请求接口
import util from './api/util.js' // 封装的工具类接口
import vant from './api/vant.js' // vant 组件库
import element from './api/element.js' // Element 组件库
import 'element-ui/lib/theme-chalk/display.css' // Element 自适应样式
import './styles/index.css' // 全局样式库
import VueClipboard from 'vue-clipboard2' // 剪贴板插件

Vue.config.productionTip = false
Vue.use(request) // 封装的 http 请求接口
Vue.use(util) // 封装的工具类接口
Vue.use(vant) // Vant 组件
Vue.use(element) // Element 组件
Vue.use(VueClipboard)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
