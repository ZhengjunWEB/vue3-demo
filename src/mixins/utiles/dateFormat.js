var dayjs = require('dayjs')
export default function(type, date, format) {
  if(!date) {
    return
  }
  let display = []
  let data = []
  if(date.length == 2) {
    data[0] = dayjs(date[0]).startOf(type).format('YYYY-MM-DD')
    data[1] = dayjs(date[1]).endOf(type).format('YYYY-MM-DD')
    display[0] = dayjs(date[0]).format(format)
    display[1] = dayjs(date[1]).format(format)
  }
  return [data, display]
}
