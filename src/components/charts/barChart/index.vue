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
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: 'ECharts'
    },
    chartData: {
      type: Object
    },
    as: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  setup(_, ctx) {
    let myChart = null
    let row = []
    let series = []
    onMounted(() => {
      series = getRes()
      initChart()
      window.onresize = () => {
        myChart.resize()
      }
    })
    onUnmounted(() => {
      window.onresize = null
    })
    const getRes = () => {
      let res = []
      _.chartData.col.forEach((item, i) => {
        res.push({
          name: (_.as.length && _.as[i]) || item,
          type: 'bar',
          data:[]
        })
      })
      return res
    }
    watch(() => _.title, (n) => {
      myChart.dispose()
      initChart()
    })
    watch(() => _.chartData.row, (n) => {
      n.forEach((item) => {
        row.push(item.date)
        series.forEach((i, index) => {
          index == 0 && i.data.push(item.total_num)
          index == 1 && i.data.push(item.customer_num)
        })
      })
      myChart.dispose()
      initChart()
    })
    const initChart = () => {
      myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: _.title
        },
        tooltip: {},
        xAxis: {
          data: row
        },
        yAxis: {},
        series: series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
