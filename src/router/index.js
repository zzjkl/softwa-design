import Vue from 'vue'
//导入路由插件
import VueRouter from 'vue-router'
//导入自定义插件
import Data from "../views/Data";
import Pump from "../views/Pump";

import ComponentData from "../views/componentList/ComponentData";
//使用路由
Vue.use(VueRouter);
//配置路由
const routes = [
  {path: "/",redirect: "/pump"},
  {
    path: "/data",
    component: Data,
    children: [
      {path: "/data/:componentName",name: 'componentData',component: ComponentData,props: true}
    ]
  },
  {path: "/pump",component: Pump}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
