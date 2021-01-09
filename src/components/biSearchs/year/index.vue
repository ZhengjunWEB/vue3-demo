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
        <table>
          <tbody>
            <tr><td>{{year - 11}}</td><td>{{year - 10}}</td><td>{{year - 9}}</td><td>{{year - 8}}</td></tr>
            <tr><td>{{year - 6}}</td><td>{{year - 6}}</td><td>{{year - 5}}</td><td>{{year - 4}}</td></tr>
            <tr><td>{{year - 3}}</td><td>{{year - 2}}</td><td>{{year - 1}}</td><td>{{year}}</td></tr>
          </tbody>
        </table>
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
      modelVlue: Array
  },
  setup(props, ctx) {
    const state = reactive({
      year: moment().format("YYYY"),
      iptData: [],
      is_select: new Array(4),
      show: false,
    });
    let temporary = [];
    let date = [];
    const prev = () => {
      state.year = state.year * 1 - 12;
    };
    const next = () => {
      state.year = state.year * 1 + 12;
    };
    const dateArr = computed( () => {

    })
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
    table {
      width: 100%;
      margin-top: 10px;
      font-size: 12px;
      tr {
          line-height: 2;
          td {
              cursor: pointer;
              padding: 5px 0;
              &:hover {
                  background-color:  $PrimaryL;
                  color: #fff;
              }
          }
      }
    }
  }
}
</style>
