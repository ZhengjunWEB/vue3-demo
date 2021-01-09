<template>
  <el-col :span="24">
    <span class="label" v-if="!noLabel">{{label}}</span>
    <el-select size="mini" v-model="value" placeholder="请选择" >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-date-picker v-if="value == 'day'" size="mini" v-model="dateValue" type="daterange" @change="datechange" />
    <el-date-picker v-if="value == 'week'" size="mini" v-model="dateValue" type="daterange" format="YYYY-ww周" @change="datechange" />
    <el-date-picker v-if="value == 'month'" size="mini" v-model="dateValue" type="monthrange" format="YYYY-MM月" @change="datechange" />
    <bi-quarter v-if="value == 'quarter'"  v-model="dateValue" />
    <bi-year v-if="value == 'year'"  v-model="dateValue" />
  </el-col>
</template>
<script >
import { reactive, toRefs, watch, computed } from 'vue'
import dateFormat from '@/mixins/utiles/dateFormat'
export default {
  props: {
    noLabel: {
      type: Boolean,
      default: false
    },
    inQuery: {
      type:Boolean,
      default: true
    },
    label: {
      type: String,
      default: '时间类型'
    },
    key: {
      type: String,
      default: 'type'
    },
    startDate: {
      type: String,
      default: 'start_date'
    },
    endDate: {
      type: String,
      default: 'end_date'
    }
  },
  setup(props) {
    const options = [
      { label: '日报', value: 'day', keyWords: '请选择日期', format: 'YYYY-MM-DD' },
      { label: '周报', value: 'week', keyWords: '请选择周', format: 'YYYY-ww' },
      { label: '月报', value: 'month', keyWords: '请选择月', format: 'YYYY-MM' },
      { label: '季报', value: 'quarter', keyWords: '请选择季度', format: 'YYYY-Q' },
      { label: '年报', value: 'year', keyWords: '请选择年', format: 'YYYY' }
    ]
    const state = reactive({
      value: 'day',
      dateValue: []
    })
    watch(() => state.value, () => {
      state.dateValue = []
    })
    const getPara = () => {
      let data = {par:{},state:props.inQuery}
      data.par[props.key] = state.value
      let status = state.dateValue.length == 2
     status && (data.par[props.startDate] = state.dateValue[0])
     status && (data.par[props.endDate] = state.dateValue[1])
      return data
    }
    const datechange = (v) => {
      if(!v) {
        return
      }
      let res = dateFormat(state.value, v, formatType())
      state.dateValue = res
    }
    const formatType = () => {
      let k = options.find( (item) => {
        return item.value == state.value
      })
      return k.format
    }
    const abc = (d) => {
      console.log(d);
    }
    return {
      getPara,
      options,
      datechange,
      abc,
      ...toRefs(state)
    }
  }
}
</script>
