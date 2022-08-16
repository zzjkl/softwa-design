<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="system"
        label="系统"
        width="150">
      </el-table-column>
      <el-table-column label="参数类型" width="150">
        ——
      </el-table-column>
      <el-table-column
        prop="id"
        label="参数ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="参数名称"
        width="250">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="showDrawer(scope.row)" type="primary" style="margin-left: 16px;">
            数据可视化
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      size="70%"
      :visible.sync="drawer"
      :direction = "direction"
      :with-header="false">
      <div id="myChart" ref="myChart">
      </div>
    </el-drawer>
  </div>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";

export default {
  props: ['componentName'],
  name: "ComponentData",
  data() {
    return {
      componentID: null,
      drawer: false,
      direction: 'btt',
      tableData: null,
      chartLine: null,
      x_data: [],
      y_data: []
    }
  },
  methods: {
    showDrawer: function (row){
      this.componentID = row.id;
      this.drawer = true;
      this.$nextTick(()=>{
        this.getCharts();
      })


    },
    async getCharts(){
      //设置baseUrl解决跨域，在index.js允许跨域
      //从后端处获取数据
      let url = "http://localhost:8082/" + this.componentName + "/" + this.componentID + "/1";
      let temp;
      await axios.get(url).then((response)=>{
        let arr = response.data.pumpData;
        this.x_data = [];
        this.y_data = [];

        for(let i = 0; i < arr.length; i++){
          this.y_data.push(arr[i].data);
          this.x_data.push(arr[i].localDateTime);
        }

      })

      this.chartLine = echarts.init(this.$refs.myChart);
      // 指定图表的配置项和数据
      let option = {
        tooltip: {              //设置tip提示
          trigger: 'axis'
        },

        color: ['#8AE09F', '#FA6F53'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {                //设置x轴
          type: 'category',
          boundaryGap: false,     //坐标轴两边不留白
          data: this.x_data,
          nameTextStyle: {        //坐标轴名称的文字样式
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: {             //坐标轴轴线相关设置。
            lineStyle: {
              color: '#FA6F53',
            }
          }
        },
        yAxis: {
          name: "\t\t\t\t\t\t\t\t系统名称：CW1 参数ID：" + this.componentID,
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#FA6F53',
            }
          },
          type: 'value'
        },
        series: [
          {
            data:  this.y_data,
            type: 'line',               // 类型为折线图
            lineStyle: {                // 线条样式 => 必须使用normal属性
              normal: {
                color: '#8AE09F',
              }
            },
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      this.chartLine.setOption(option);
    }
  },
  mounted() {
    let url = "http://localhost:8081/static/data/" + this.componentName + ".json";
    axios.get(url).then((response)=>{
      this.tableData = response.data;
    })
  },
  beforeUpdate() {
    let url = "http://localhost:8081/static/data/" + this.componentName + ".json";
    axios.get(url).then((response)=>{
      this.tableData = response.data;
    })
  },
}
</script>

<style scoped>
 #myChart {
   width: 100%;
   height: 400px;
 }
</style>
