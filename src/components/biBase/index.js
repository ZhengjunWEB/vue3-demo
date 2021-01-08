import board from './board/index.vue'
import biTable from './biTable/index.vue'

const biBase = {
  install(Vue) {
    Vue.component('bi-board', board)
    Vue.component('bi-table', biTable)
  }
}
export default biBase
