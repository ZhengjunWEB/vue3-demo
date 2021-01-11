<template>
  <div class="barChart">
    <div id="myChart" style="winth:100%; height:300px"></div>
  </div>

</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import { onMounted, onUnmounted } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: 'ECharts高级'
    }
  },
  setup(_, ctx) {
    let myChart = null
    onMounted(() => {
      initChart()
      window.onresize = () => {
        myChart.resize()
      }
    })
    onUnmounted(() => {
      window.onresize = null
    })
    const initChart = () => {
      myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: _.title
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
