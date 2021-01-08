export default function(pars) {
  let keys = Object.keys(pars)
  let res = { query:{} }
  keys.forEach((item) => {
    pars[item].getPara && (pars[item].getPara().state ? Object.assign(res.query,pars[item].getPara().par): Object.assign(res,pars[item].getPara().par))
  })
  res.query = JSON.stringify(res.query)
  console.log(res);
  return res
}
