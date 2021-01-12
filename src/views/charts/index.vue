<template>
  <div class="charts">
    <bar-chart :title="title" :chartData="chartData" :as="as" />
    <button @click="dd">点击</button>
  </div>
</template>

<script>
import { order } from '@/network/api/business'
import { onMounted, reactive, toRefs } from 'vue'
export default {
  setup(_, props) {
    let row = []
    let state = reactive({
      chartData: { col: ['total_num', 'customer_num'], row: [] },
      title: '哈哈哈',
      as: ['总数', '客户数']
    })
    const dd = () => {
      state.title = '呵呵呵'
    }
    onMounted(() => {
      order({ type: 'week', page: 2, per_page: 10 }).then((data) => {
        let res = data.data.data.data
        row = res.map((item) => {
          item.data.date = item.date
          return item.data
        })
        state.chartData.row = row
      })
    })
    return {dd,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
