import { http } from '../request/request'

// 费用类型
export function feeType(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/feeType',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 公司抬头
export function ReceiptTitle(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/corpTitle',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 擅长行业
export function industry(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/industry',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 客户来源
export function customerFrom(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/customerFrom',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 组织架构
export function ByParentId(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/member/division/getByParentId',
            params
        })
        .then(data => {
            res(data.data.data.map(item => {
                return { value: item.id, label: item.name }
            }))
        })
    })
}

// 地区派系
export function regionalFactions(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/regionalFactions',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 材质
export function material(params) {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/business/material',
            params
        })
        .then(data => {
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 供应商列表
export function providerList() {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/provision/providerList'
        })
        .then(data => {
            data.data.data = data.data.data.map(item => {
                return {
                    value: item.username,
                    label: item.name
                }
            })
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}

// 采购人员列表
export function purchaseList() {
    return new Promise((res, rej) => {
        http({
            method: 'get',
            url:'bip/procure/purchaseList'
        })
        .then(data => {
            data.data.data = data.data.data.map(item => {
                return {
                    value: item.purchaser_id,
                    label: item.purchaser_id + '-' + item.value
                }
            })
            data.data.data.unshift({ value: 0, label: '全部' })
            res(data)
        })
    })
}
