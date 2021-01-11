import barChart from './barChart/index.vue'

const charts = {
  install(Vue) {
    Vue.component('barChart', barChart)
  }
}
export default charts
