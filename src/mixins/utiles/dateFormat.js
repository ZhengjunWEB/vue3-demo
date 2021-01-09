var dayjs = require('dayjs')
export default function(type, date, format) {
  let data = []
  if(date.length == 2) {
    data.push(dayjs(date[0]).startOf(type).format('YYYY-MM-DD'), dayjs(date[1]).endOf(type).format('YYYY-MM-DD'))
  }
  console.log(data);
  return data
}
