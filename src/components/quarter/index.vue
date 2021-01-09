<template>
  <!-- 测试用 勿动 -->
  <div class="quarter">
    <!-- <mark v-show="showSeason" style="position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0);z-index:9999;" @click.stop="showSeason=false" />
    <el-input placeholder="请选择季度" suffix-icon="el-icon-date" size="small" :class="[range?'ipt-big':'ipt-mini']" :value="q_data" @focus="showSeason=true" />
    <el-card v-show="showSeason" class="box-card" style="width:180px;padding: 0 3px 20px;margin-top:10px;position:fixed;z-index:9999">
      <template #header class="clearfix" style="text-align:center;padding:0">
        <button type="button" aria-label="前一年" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left" @click="prev" />
        <span role="button" class="el-date-picker__header-label">{{ year }}年</span>
        <button type="button" aria-label="后一年" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right" @click="next" />
      </template>
      <div class="text item" style="text-align:center;">
        <div class="item_r" :class="{'active': getActive(0), 'disable': isOverNow(0)}" @click="selectSeason(0,'1')">第一季度</div>
        <div class="item_r" :class="{'active': getActive(1), 'disable': isOverNow(1)}" @click="selectSeason(1,'4')">第二季度</div>
        <div class="item_r" :class="{'active': getActive(2), 'disable': isOverNow(2)}" @click="selectSeason(2,'7')">第三季度</div>
        <div class="item_r" :class="{'active': getActive(3), 'disable': isOverNow(3)}" @click="selectSeason(3,'10')">第四季度</div>
      </div>
    </el-card> -->
    jidu
  </div>
</template>
<script>
const dayjs = require('dayjs')
// import { reactive, toRefs, computed, getCurrentInstance } from 'vue'
export default {
  // model: {
  //   prop: 'quarter',
  //   event: 'q_change'
  // },
  // props: {
  //   range: { type: Boolean, default: false },
  //   quarter: { type: String | Array, default: '' },
  //   dateType: { type: String, default: '' }
  // },
  // setup(prop, ctx) {
  //   const state = reactive({
  //     showSeason: false,
  //     year: new Date().getFullYear(),
  //     is_active: [],
  //     z: new Array(4),
  //     type: '',
  //     temporary: [],
  //   })
  //   const quartMinMonth = {
  //       // 第一季度
  //       0: '01-02',
  //       // 第二季度
  //       1: '04-02',
  //       // 第三季度
  //       2: '07-02',
  //       // 第四季度
  //       3: '10-02'
  //     }
  //   const prev = () => {
  //     state.year = state.year * 1 - 1
  //   }
  //   const next = () => {
  //     state.year = state.year * 1 + 1
  //   }
  //   const getActive = (i) => {
  //     if (state.z[i]) {
  //       return state.z[i].includes(state.year)
  //     }
  //     return false
  //   }
  //   const isOverNow = (valDate) => {
  //     // 该季度是否超出当前季度
  //     // 判断逻辑:当前时间如果大于传入季度最小时间，则认为可以选择
  //     let y = new Date().getFullYear() // 大于当前年 全部禁用
  //     if (state.year > y) {
  //       return true
  //     } else {
  //       let minQuary = state.year + '-' + state.quartMinMonth[valDate]
  //       let nowDay = dayjs().format('YYYY-MM-DD')
  //       return !(nowDay >= minQuary)
  //     }
  //   }
  //   const selectSeason = (index, i) => {
  //     if (state.isOverNow(index)) {
  //       console.log('该季度不能选择')
  //       return
  //     }
  //     let date = state.year + '-' + i.padStart(2, 0)
  //     state.$set(state.z, index, date)
  //     if (state.range) {
  //       state.temporary.push(date)
  //       if (state.temporary.length == 2) {
  //         // 日期多选
  //         if (state.temporary[0] > state.temporary[1]) {
  //           // 判断日期大小 小的在前
  //           ctx.$emit('q_change', state.temporary.reverse())
  //         } else {
  //           ctx.$emit('q_change', state.temporary)
  //         }
  //         state.wipe()
  //         return
  //       }
  //     } else {
  //       // 日期单选
  //       state.temporary = date
  //       ctx.$emit('q_change', state.temporary)
  //       state.wipe()
  //       return
  //     }
  //   }
  //   return {
  //     quartMinMonth,
  //     prev,
  //     next,
  //     getActive,
  //     isOverNow,
  //     selectSeason,
  //     ...toRefs(state)
  //   }
  // }
  // data() {
  //     return {
  //         showSeason: false,
  //         season: '',
  //         year: new Date().getFullYear(),
  //         is_active: [],
  //         z: new Array(4),
  //         type: '',
  //         temporary: [],
  //         quartMinMonth: {
  //             // 第一季度
  //             0: '01-02',
  //             // 第二季度
  //             1: '04-02',
  //             // 第三季度
  //             2: '07-02',
  //             // 第四季度
  //             3: '10-02'
  //         }
  //     }
  // },
  // computed: {
  //     q_data() {
  //         if (typeof this.quarter === 'object') {
  //             if (this.quarter.length == 0) {
  //                 console.log(this.quarter);
  //                 return ''
  //             }
  //             return (
  //                 dayjs(new Date(this.quarter[0])).format('YYYY-Q') + '~' + dayjs(new Date(this.quarter[1])).format('YYYY-Q')
  //             )
  //         } else {
  //             return dayjs(new Date(this.quarter)).format('YYYY-Q')
  //         }
  //     }
  // },
  // created() {
  //     this.type = this.dateType
  // },
  // methods: {
  //     isOverNow(valDate) {
  //         // 该季度是否超出当前季度
  //         // 判断逻辑:当前时间如果大于传入季度最小时间，则认为可以选择
  //         let y = new Date().getFullYear(); // 大于当前年 全部禁用
  //         if (this.year > y) {
  //             return true;
  //         } else {
  //             let minQuary = this.year + '-' + this.quartMinMonth[valDate];
  //             let nowDay = dayjs().format('YYYY-MM-DD');
  //             return !(nowDay >= minQuary)
  //         }
  //     },
  //     prev() {
  //         this.year = this.year * 1 - 1
  //     },
  //     next() {
  //         this.year = this.year * 1 + 1
  //     },
  //     selectSeason(index, i) {
  //         if (this.isOverNow(index)) {
  //             console.log('该季度不能选择');
  //             return;
  //         }
  //         let date = this.year + '-' + i.padStart(2, 0)
  //         this.$set(this.z, index, date)
  //         if (this.range) {
  //             this.temporary.push(date)
  //             if (this.temporary.length == 2) { // 日期多选
  //                 if (this.temporary[0] > this.temporary[1]) { // 判断日期大小 小的在前
  //                     this.$emit('q_change', this.temporary.reverse())
  //                 } else {
  //                     this.$emit('q_change', this.temporary)
  //                 }
  //                 this.wipe()
  //                 return
  //             }
  //         } else { // 日期单选
  //             this.temporary = date
  //             this.$emit('q_change', this.temporary)
  //             this.wipe()
  //             return
  //         }
  //     },
  //     getActive(i) { // 是否选中
  //         if (this.z[i]) {
  //             return this.z[i].includes(this.year)
  //         }
  //         return false
  //     },
  //     wipe() {
  //         this.showSeason = false
  //         this.temporary = []
  //         this.z = new Array(4)
  //     }
  // }
}
</script>
<style lang='scss' scoped>
.quarter {
  margin-left: 10px;
}
.el-card.is-always-shadow {
  box-shadow: none !important;
}
.ipt-big {
  width: 245px;
  font-size: 14px;
}
.ipt-mini {
  width: 200px;
  font-size: 14px;
}
.item .active {
  background: $PrimaryD !important;
  color: $PrimaryD !important;
}
.item :hover {
  background: $PrimaryD !important;
  color: $PrimaryD !important;
}
.item_r {
  margin: 0 auto;
  width: 80%;
  color: $PrimaryD;
  margin-bottom: 8px;
  cursor: pointer;
  &.disable {
    background: $PrimaryD !important;
    color: $PrimaryD !important;
    &:hover {
      background: $PrimaryD !important;
      color: $PrimaryD !important;
      cursor: not-allowed;
    }
  }
}
</style>
