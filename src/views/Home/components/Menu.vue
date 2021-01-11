<template>
  <el-menu :default-active="path" class="el-menu-vertical-demo" router>
    <el-menu-item index="/home/overview">
      <i class="el-icon-menu"></i>
      <template #title>数据总览</template>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-location"></i>
        <span>客户数据</span>
      </template>
      <el-menu-item index="2-1-1">选项1</el-menu-item>
      <el-menu-item index="2-1-2">选项1</el-menu-item>
      <el-menu-item index="2-1-3">选项1</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-location"></i>
        <span>业务数据</span>
      </template>
      <el-menu-item index="/home/quotation/order">报价单数据</el-menu-item>
      <el-menu-item index="/home/quotation/track">报价单跟踪数据</el-menu-item>
      <el-menu-item index="3-1-3">流转单数据</el-menu-item>
    </el-submenu>
    <el-menu-item index="/home/charts">
      <i class="el-icon-menu"></i>
      <template #title>图表</template>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { defineComponent, getCurrentInstance, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const path = computed(() => {
      return route.path
    })
    return {
      path
    }
  }
})
</script>
