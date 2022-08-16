import Vue from 'vue'
//自定义组件
import App from './App'
//element-ui库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//axios库
import axios from 'axios'
import VueAxios from 'vue-axios'

//echarts
import * as echarts from "echarts";//建议按需导入，不会占用项目太多资源
Vue.prototype.$echarts = echarts//构造全局实例


//自定义路由
import router from "./router/index.js";
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
