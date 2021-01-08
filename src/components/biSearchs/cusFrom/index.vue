<template>
  <el-col :lg="6" :xl="3">
    <span class="label" v-if="!noLabel">{{label}}</span>
    <el-select size="mini" v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-col>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    noLabel: {
      type: Boolean,
      default: false
    },
    inQuery: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: '客户来源'
    },
    key: {
      type: String,
      default: 'customer_from'
    }
  },
  setup(props) {
    const options = [
      { label: '全部', value: 1 },
      { label: 'jj', value: 2 }
    ]
    const value = ref(1)
    const getPara = () => {
      let data = {par:{},state:props.inQuery}
      value.value && (data.par[props.key] = value.value)
      return data
    }
    return {
      getPara,
      options,
      value
    }
  }
}
</script>
