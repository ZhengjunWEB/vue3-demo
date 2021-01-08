import { ref } from 'vue'

export default function() {
  const reportType = ref(null)
  const cusFrom = ref(null)
  const industry = ref(null)
  const receiptTitle = ref(null)
  const byParentId = ref(null)
  return {
    reportType, cusFrom, industry, receiptTitle, byParentId
  }
}
