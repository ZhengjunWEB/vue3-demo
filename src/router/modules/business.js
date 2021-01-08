const business = [
  // 报价单
  {
    path: 'quotation/order',
    name: 'quotationOrder',
    component: () => import('@/views/business/order/index.vue')
  },
  // 报价单跟踪
  {
    path: 'quotation/track',
    name: 'quotationTrack',
    component: () => import('@/views/business/track/index.vue')
  },
  // // 请款单数据
  // {
  //   path: 'payorder',
  //   name: 'payorder',
  //   component: () => import('@/views/army/payorder/index.vue')
  // },
  // // 流转单数据
  // {
  //   path: 'cirorder',
  //   name: 'cirorder',
  //   component: () => import('@/views/army/cirorder/index.vue')
  // },
  // // 退货单
  // {
  //   path: 'returned',
  //   name: 'returned',
  //   component: () => import('@/views/army/returned/index.vue')
  // },
  // // 退货单原因
  // {
  //   path: 'returned_cause',
  //   name: 'returned_cause',
  //   component: () => import('@/views/army/returned_cause/index.vue')
  // },
  // // 异常单
  // {
  //   path: 'anomaly',
  //   name: 'anomaly',
  //   component: () => import('@/views/army/anomaly/index.vue')
  // },
  // // 异常单原因
  // {
  //   path: 'anomaly_cause',
  //   name: 'anomaly_cause',
  //   component: () => import('@/views/army/anomaly_cause/index.vue')
  // },
  // // 到账单
  // {
  //   path: 'receipt',
  //   name: 'receipt',
  //   component: () => import('@/views/army/receipt/index.vue')
  // },
  // // 个人业绩
  // {
  //   path: 'personage',
  //   name: 'personage',
  //   component: () => import('@/views/army/personage/index.vue')
  // }
]
export default business
