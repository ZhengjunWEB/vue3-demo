// 采购api
import { http } from '../request/request'

// 采购毛利率
export function profit(params) {
    return http({
        method: 'get',
        url:'bip/procure/profit',
        params
    })
}

// 采购数据
export function order(params) {
    return http({
        method: 'post',
        url:'bip/procure/stat/person',
        params
    })
}

// 采购单逾期数据
export function overdue(params) {
    return http({
        method: 'get',
        url:'bip/procure/overdue',
        params
    })
}
