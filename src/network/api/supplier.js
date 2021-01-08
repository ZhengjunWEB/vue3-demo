// 供应商数据接口
import { http } from '../request/request'

// 数据总览上部供应商数据
export function provider(params) {
    return http({
        method: 'get',
        url:'bip/provision/provider',
        params
    })
}

// 交易数据
export function deal(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/provider',
        params
    })
}

// 退货数据
export function returned(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/returned',
        params
    })
}

// 退货原因
export function returnedReason(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/returnedReason',
        params
    })
}

// 消费排行
export function consumeRank(params) {
    return http({
        method: 'get',
        url:'bip/provision/consumeRank',
        params
    })
}

// 详情
export function providerDetail(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/providerDetail',
        params
    })
}

// 异常
export function supplierAnomaly(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/supplierAnomaly',
        params
    })
}

// 对账
export function account(params) {
    return http({
        method: 'post',
        url:'bip/provision/stat/account',
        params
    })
}

// 逾期
export function overdue(params) {
    return http({
        method: 'get',
        url:'bip/provision/overdue',
        params
    })
}

