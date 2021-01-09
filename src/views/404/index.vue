<template>
  <div class="err-404">
    <div>哇哦 404!!!</div>
    <el-button type="bi" @click="goback">返回</el-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    let router = useRouter()
    const goback = () => {
      router.go(-1)
    }
    return {
      goback
    }
  }
}
</script>

<style lang="scss" scoped>
.err-404 {
  margin: 200px auto;
  text-align: center;
  font-size: 44px;
  font-weight: bold;
  color: $PrimaryD;
}
</style>
