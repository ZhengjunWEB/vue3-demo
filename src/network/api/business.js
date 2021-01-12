import { http } from '../request/request'

// export function order(params) {
//   return http({
//     method:'post',
//     url:'bip/business/stat/quotation',
//     data: params
//   })
// }
// 报价单跟踪数据
export function reportPriceTrace(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/quotationReason',
      params
  })
}

// 报价单跟踪可视图
export function reportPriceFeeType(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/reasonType',
      params
  })
}

// 流转单数据
export function circulation(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/order',
      params
  })
}

// 请款单数据
export function request(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/applypay',
      params
  })
}

// 请款单费用类型
export function feeType(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/feeType',
      params
  })
}

// 退货单数据
export function returned(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/returned',
      params
  })
}

// 退货处理方式环形图 ******************************
export function returnType(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/returnedType',
      params
  })
}

// 退货原因数据
export function reason(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/returnedReason',
      params
  })
}

// 客户退货原因分布
export function returnReason(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/returnedReason/typeList',
      params
  })
}

// 异常单数据
export function exceptionOrder(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/disorder',
      params
  })
}

// 异常单数据可视图
export function exceptionType(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/disorder/typeList',
      params
  })
}

// 到账数据
export function order(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/received',
      data:params
  })
}

// 个人业绩
export function personage(params) {
  return http({
      method: 'post',
      url:'bip/business/stat/person',
      params
  })
}
