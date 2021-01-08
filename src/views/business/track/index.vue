<template>
  <div class="track">
    <bi-board title="报价单跟踪数据">
      <bi-table>
        <template v-slot:searchs>
           <cusfrom ref="cusFrom" />
        </template>
      </bi-table>
    </bi-board>
  </div>
</template>

<script>
import searchs from '@/mixins/searchs/index.js'
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const { cusFrom } = searchs()
    onMounted(() => {
      // let res = cusFrom.value.getSearchParm()
      // console.log(res)
    })
    return {
      cusFrom
    }
  }
}
</script>
