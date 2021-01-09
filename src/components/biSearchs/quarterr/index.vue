<template>
<div class="quarter">
  <i class="el-icon-date" style="color: #C0C6CE" />
  <input type="text" :value="iptData[0]" @focus="focus">
  <span> - </span>
  <input type="text" :value="iptData[1]" @focus="focus">
  <i class="el-icon-circle-close" style="color: #C0C6CE; cursor: pointer" @click="wipe" />
  <div class="content" v-if="show">
    <div class="title">
      <button class="el-icon-arrow-left" @click="prev" />
      <div class="date">{{ year }}</div>
      <button class="el-icon-arrow-right" @click="next" />
    </div>
    <ul>
      <li @click="dateSelect(1, 3)" :class="{'select': is_select[0] == year}">第一季度</li>
      <li @click="dateSelect(2, 6)" :class="{'select': is_select[1] == year}">第二季度</li>
      <li @click="dateSelect(3, 9)" :class="{'select': is_select[2] == year}">第三季度</li>
      <li @click="dateSelect(4, 12)" :class="{'select': is_select[3] == year}">第四季度</li>
    </ul>
  </div>
</div>
<div class="shade" v-if="show" @click="blur"></div>
</template>

<script>
var moment = require('moment')
import { reactive, toRefs } from 'vue'
export default {
  props: ['modelVlue'],
  setup(props, ctx) {
    const state = reactive({
      year: moment().format('YYYY'),
      iptData: [],
      is_select: new Array(4),
      show: false
    })
    let temporary = []
    let date = []
    const prev = () => {
      state.year = state.year*1 - 1
    }
    const next = () => {
      state.year = state.year*1 + 1
    }
    const dateSelect = (i, d) => {
      state.is_select[i - 1] = state.year
      date.push(`${state.year}-${d}`) // 传出去
      temporary.push(`${state.year}-${i}季度`)
      if(temporary.length == 2) {
        state.show = false
        if(temporary[0] > temporary[1]) {
          date.reverse() // 判断时间大小 大反转
          temporary.reverse()
        }
        state.iptData = temporary // 用户可见
        date[0] = moment(new Date(date[0])).startOf('quarter').format('YYYY-MM-DD')
        date[1] = moment(new Date(date[1])).endOf('quarter').format('YYYY-MM-DD')
        ctx.emit('update:modelValue', date)
        date = []
        temporary = []
        state.is_select = new Array(4)
      }
    }
    const focus = () => {
      state.show = true
    }
    const blur = () => {
      state.show = false
    }
    const wipe = () => {
      state.iptData = []
    }
    return {
      prev,
      next,
      dateSelect,
      focus,
      blur,
      wipe,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.shade {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;
}
.quarter {
  position: relative;
  display: inline-block;
  border: 1px solid $PrimaryM;
  padding: 4px 10px;
  border-radius: 5px;
  vertical-align: top;
  input {
    text-align: center;
    font-size: 12px;
    width: 82px;
    border: none;
    outline: none;
  }
  .content {
    position: absolute;
    z-index: 9999;
    text-align: center;
    color: #666;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border: 1px solid #E4E7ED;
    background-color: #fff;
    .title {
      .date {
        display: inline-block;
        padding: 0 15px;
      }
      button {
        cursor: pointer;
        font-size: 12px;
        padding: 5px;
        border: none;
        background-color: #fff;
        outline: none;
      }
    }
    ul {
      li {
        cursor: pointer;
        padding: 0 30px;
        white-space: nowrap;
        font-size: 14px;
        line-height: 2;
        margin-bottom: 5px;
        &:hover {
          background-color: $PrimaryL;
          color: #fff;
        }
      }
      .select {
        background-color: $PrimaryD;
        color: #fff;
        &:hover {
        background-color: $PrimaryD;
        color: #fff;
        }
      }
    }
  }
}
</style>
