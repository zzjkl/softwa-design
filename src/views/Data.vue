<template>
  <div id="data">
    查看的部件名称：
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <router-link :to="{name: 'componentData',params: {componentName: item.value}}" style="text-decoration: none" tag="option">
          {{item.label}}
        </router-link>
      </el-option>
    </el-select>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      options: [{
        value: 'power',
        label: '电机'
      }, {
        value: 'gearbox',
        label: '齿轮箱'
      }, {
        value: 'pumpguide',
        label: '泵导轴承'
      }, {
        value: 'pumpbearing',
        label: '泵轴承'
      }, {
        value: 'pumpcover',
        label: '泵盖'
      }],
      value: ''
    }
  }
}
</script>
<style scoped>
#data {
  margin-top: 5px;
}
</style>
