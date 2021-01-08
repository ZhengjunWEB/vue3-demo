import { http } from '../request/request'

// 客户总览
export function customerReport(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerReport',
        params
    })
}

// 客户地区分布
export function customerArea(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerArea',
        params
    })
}

// 客户省份城市排行
export function topCustomerArea(params) {
    return http({
        method: 'post',
        url:'xbip/customer/topCustomerArea',
        params
    })
}

// 省份城市及消费排行
export function customerCity(params) {
    return http({
        method: 'post',
        url:'/xbip/customer/customerCity',
        params
    })
}

// 客户来源
export function customerFrom(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerFrom',
        params
    })
}

// 客户行业
export function customerIndustry(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerIndustry',
        params
    })
}

// 客户复购->出库客户
export function customerRepurchase(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerRepurchase',
        params
    })
}

// 客户复购->出库订单
export function customerOrderOut(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerOrderOut',
        params
    })
}

// 客户复购->出库金额
export function customerOutMoney(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerOutMoney',
        params
    })
}

// 客户复购->复购率
export function customerRate(params) {
    return http({
        method: 'post',
        url:'xbip/customer/customerRate',
        params
    })
}
