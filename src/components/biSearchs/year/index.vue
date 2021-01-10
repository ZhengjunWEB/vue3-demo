<template>
  <div class="quarter">
    <i class="el-icon-date" style="color: #c0c6ce" />
    <input type="text" :value="iptData[0]" @focus="focus" />
    <span> - </span>
    <input type="text" :value="iptData[1]" @focus="focus" />
    <i
      class="el-icon-circle-close"
      style="color: #c0c6ce; cursor: pointer"
      @click="wipe"
    />
    <div class="content" v-if="show">
      <div class="title">
        <button class="el-icon-arrow-left" @click="prev" />
        <div class="date">{{ year - 11 }}年 - {{ year }}年</div>
        <button class="el-icon-arrow-right" @click="next" />
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="8" v-for="i in 12" :key="i">
            <div
              class="item"
              :class="{ select: selected(item(i)) }"
              @click="select(item(i))"
              v-html="item(i)"
            ></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div class="shade" v-if="show" @click="blur"></div>
</template>

<script>
var moment = require("moment");
import { reactive, toRefs, computed } from "vue";
export default {
  props: {
    modelVlue: Array,
  },
  setup(props, ctx) {
    const state = reactive({
      year: moment().format("YYYY"),
      iptData: [],
      is_select: [],
      show: false,
    });
    let temporary = [];
    const prev = () => {
      state.year = state.year * 1 - 12;
    };
    const next = () => {
      state.year = state.year * 1 + 12;
    };
    const item = (i) => {
      return state.year - (12 - i);
    };
    const select = (i) => {
     temporary.push(i);
      if (temporary.length == 2) {
        if (temporary[0] > temporary[1]) {
          temporary.reverse();
        }
        state.show = false;
        state.iptData = temporary
        state.is_select[0] = temporary[0]+'-1-1'
        state.is_select[1] = temporary[1]+'-12-31'
        temporary = []
      }
      ctx.emit('update:modelValue', state.is_select)
    };
    const selected = (i) => {
      return state.is_select.some((item) => {
        return item == i;
      });
    };
    const focus = () => {
      state.show = true;
    };
    const blur = () => {
      state.show = false;
    };
    const wipe = () => {
      state.iptData = [];
    };
    return {
      prev,
      next,
      focus,
      blur,
      wipe,
      item,
      select,
      selected,
      ...toRefs(state),
    };
  },
};
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
    width: 280px;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 5px;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    .title {
      .date {
        display: inline-block;
        padding: 0 55px;
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
    .item {
      cursor: pointer;
      padding: 5px 0;
      margin-bottom: 5px;
      &:hover {
        background-color: $PrimaryL;
        color: #fff;
      }
    }
    .select {
      color: #fff;
      background-color: $PrimaryD;
    }
  }
}
</style>
