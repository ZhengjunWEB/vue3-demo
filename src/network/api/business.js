import { http } from '../request/request'

export function order(params) {
  return http({
    method:'post',
    url:'bip/business/stat/quotation',
    data: params
  })
}
