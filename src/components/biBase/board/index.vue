<template>
  <div class="board">
    <div class="title" :class="{'error':is_error}">
      <span>{{title}}</span>
      <img v-if="is_error" src="~@/assets/images/danger.png" >
    </div>
  </div>
  <slot />
</template>
<script >
export default {
  props: {
    title: {
      type: String
    },
    is_error: { // 红色标题 加 警报器图片
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.board {
  padding: 10px 0;
  border-bottom: 1px solid $t-border;
  margin-bottom: 10px;
  .title {
    position: relative;
    border-left: 3px solid $PrimaryD;
    padding-left: 15px;
    font-size: 18px;
    font-weight: bold;
    color: $PrimaryD;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-left: 5px;
    }
  }
  .error {
    border-color: $error;
    color: $error;
  }
}
</style>
