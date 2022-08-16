<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/pump" style="text-decoration: none">水泵可视化</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/data" style="text-decoration: none">数据可视化</router-link></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view></router-view>
  </div>
</template>

<script>

import Pump from "./views/Pump";
export default {
  name: "App",
  components: {Pump},
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>
