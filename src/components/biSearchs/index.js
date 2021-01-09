import cusFrom from './cusFrom/index.vue' // 客户来源
import datePicker from './datePicker/index.vue' // 客户来源
import biQuarter from './quarterr/index.vue'
import biYear from './year/index.vue'
// import isTax from './isTax.vue' // 是否含税
// import reportType from './reportType.vue' // 报表类型
// import feeType from './feeType.vue' // 费用类型
// import receiptTitle from './receiptTitle.vue' // 公司抬头
// import industry from './industry.vue' // 擅长行业
// import byParentId from './byParentId.vue' // 团队筛选/组织架构
// import byTeamId from './byTeamId.vue' // 组别筛选/组织架构
// import status from './status.vue' // 审批类型
// import payType from './payType.vue' // 付款方式
// import provider from './provider.vue' // 供应商 - 类型
// import providerList from './providerList.vue' // 供应商 - 列表
// import moneyType from './moneyType.vue' // 款项类型
// import armyType from './armyType.vue' // 师团类型选择
// import nature from './nature.vue' // 客户性质
// import sample from './sample.vue' // 样品单
// import history from './history.vue' // 历史交易
// import risk from './risk.vue' // 高危
// import factions from './factions.vue' // 地区派系
// import material from './material.vue' // 材质
// import normalSearch from './normalSearch.vue' // 关键词搜索
// import purchaseList from './purchaseList' // 采购人员

const biSearchs = {
    install(Vue) {
        Vue.component('cusfrom', cusFrom)
        Vue.component('datePicker', datePicker)
        Vue.component('biQuarter', biQuarter)
        Vue.component('biYear', biYear)
    }
}
export default biSearchs
