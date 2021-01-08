<template>
  <div class="tableBox">
    <div class="searchBox">
      <el-row>
        <slot name="searchs" />
      </el-row>
    </div>
    <slot name="table" />
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    noPage: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const currentPage = ref(1)
    const handleSizeChange = () => {}
    const handleCurrentChange = () => {}
    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang="scss" scoped>
.tableBox {
  padding: 0 10px;
  .ant-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .searchBox {
    margin-bottom: 15px;
  }
}
</style>
