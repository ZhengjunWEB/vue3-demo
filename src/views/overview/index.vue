<template>
  <div class="overview">
    <el-row :gutter="10">
      <el-col :xl="16">
        <div class="box">
          <bi-board title="业绩总览"></bi-board>
        </div>
        <div class="box">
          <bi-board title="请款总览"></bi-board>
        </div>
      </el-col>
      <el-col :xl="8">
        <el-row :gutter="10">
          <el-col :span="12" :xl="24">
            <div class="box">
              <bi-board title="异常单情况" is_error></bi-board>
            </div>
          </el-col>
          <el-col :span="12" :xl="24">
            <div class="box">
              <bi-board title="赊销情况" is_error></bi-board>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="box">
          <bi-board title="师团战绩"></bi-board>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :lg="12">
        <div class="box">
          <bi-board title="师团KPI可视图"></bi-board>
        </div>
      </el-col>
      <el-col :lg="12">
        <div class="box">
          <bi-board title="个人战绩排行"></bi-board>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.overview {
  background-color: $bg;
  .box {
    width: 100%;
    height: 300px;
    padding: 5px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 10px;
  }
}
</style>
