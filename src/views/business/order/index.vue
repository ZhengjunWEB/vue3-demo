<template>
  <div class="order">
    <bi-board title="报价单数据">
      <bi-table>
        <template v-slot:searchs>
          <date-picker :inQuery="false" ref="datepicker" />
          <cusfrom ref="cusFrom" />
          <el-button @click="get">获取</el-button>
        </template>
        <template v-slot:table>
          <el-table id="out-table" stripe border :data="tableData">
            <el-table-column fixed label="日期" width="120" prop="date" />
            <el-table-column fixed width="490" label="报价单总数据">
              <el-table-column width="80" label="总单数" prop="report_num" />
              <el-table-column width="80" label="总客数" prop="customer_num" />
              <el-table-column width="90" label="总金额" prop="report_amount" />
              <el-table-column width="80" label="产品数" prop="product_num" />
              <el-table-column width="80" label="客服数" prop="seller_num" />
              <el-table-column width="80" label="转化率" prop="trade_percent" />
            </el-table-column>
            <el-table-column label="报价客户数">
              <el-table-column label="工贸型" prop="by_nature_customer_num.1" />
              <el-table-column label="制造型" prop="by_nature_customer_num.2" />
              <el-table-column label="新客数" prop="new_customer_num" />
            </el-table-column>
            <el-table-column label="报价金额">
              <el-table-column label="工贸型" prop="by_nature_report_amount.1" />
              <el-table-column label="制造型" prop="by_nature_report_amount.2" />
              <el-table-column label="新客数" prop="new_customer_report_amount" />
            </el-table-column>
            <el-table-column label="报价产品数">
              <el-table-column label="标准件" prop="standard_num" />
              <el-table-column label="非标件" prop="nonstandard_num" />
              <el-table-column label="套装" prop="suit_num" />
            </el-table-column>
            <el-table-column label="报价产品金额">
              <el-table-column label="标准件" prop="standard_amount" />
              <el-table-column label="非标件" prop="nonstandard_amount" />
              <el-table-column label="套装" prop="suit_amount" />
            </el-table-column>
          </el-table>
        </template>
      </bi-table>
    </bi-board>
  </div>
</template>
<script >
import { reactive, ref, toRefs, onMounted, getCurrentInstance } from 'vue'
// import searchRefs from '@/mixins/searchs/index'
import handle from '@/mixins/utiles/handlePara.js'
import { order } from '@/network/api/business'

export default {
  setup() {
    const state = reactive({
      tableData: [],
      total: 0
    })
    const { ctx } = getCurrentInstance()
    const ins = getCurrentInstance()
    const cusFrom = ref(null)
    const datepicker = ref(null)
    onMounted(() => {
      let searchParams = handle(ins.refs)
      order(searchParams).then((data) => {
        let res = data.data.data
        state.tableData = res.data
        state.total = res.total
      })
    })
    const get = () => {
      handle(ins.refs)
    }
    return {
      get,
      cusFrom,
      datepicker,
      ...toRefs(state)
    }
  }
}
</script>
