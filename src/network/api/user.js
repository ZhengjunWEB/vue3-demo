// 用户api
import { http } from '../request/request'

// 登录
export function login(params) {
    return http({
        method: 'post',
        url:'usercenter/login',
        params
    })
}

// 获取用户信息
export function me(params) {
    return http({
        method: 'get',
        url:'usercenter/me',
        params
    })
}

// 退出登录
export function logout(params) {
    return http({
        method: 'post',
        url:'usercenter/logout',
        params
    })
}
