<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <div class="flot-l">
          <img src="~@/assets/images/wq_logo.png" alt="">
          <h1>数据分析中心</h1>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <transition name="fade">
          <el-main>
            <el-scrollbar style="height:100%">
              <router-view />
            </el-scrollbar>
          </el-main>
        </transition>
      </el-container>
    </el-container>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import Menu from './components/Menu.vue'

export default defineComponent({
  components: { Menu }
})
</script>
<style lang="scss" scoped>
.el-header {
  line-height: 80px;
  img {
    width: 70px;
    height: 60px;
    margin-right: 15px;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    color: #fff;
    letter-spacing: 4px;
    vertical-align: middle;
    margin: 0;
  }
}
</style>
