import { http } from '../request/request'

// 总览页面上半部分数据接口
export function overall(params) {
    return http({
        method: 'post',
        url:'bip/business/stat/overview',
        params
    })
}

// 总览页面下半部分数据接口
export function rankall(params) {
    return http({
        method: 'post',
        url:'bip/business/stat/overviewRank',
        params
    })
}
