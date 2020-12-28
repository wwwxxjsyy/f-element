/**
 * 时间格式转换
 * @param {*} date
 * @param {*} isHms
 */
export const resolvingDate = (date, isHms) => {
  if (date) {
    var d = new Date(date)
    var month =
      d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
    var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    var min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    var sec = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
    var times =
      d.getFullYear() +
      '-' +
      month +
      '-' +
      day +
      ' ' +
      hours +
      ':' +
      min +
      ':' +
      sec
    var timesisHms = d.getFullYear() + '-' + month + '-' + day
    if (isHms) {
      return times
    } else {
      return timesisHms
    }
  }
}

/**
 * 实现并发请求，并在最后拿到结果
 * @param {Array} tasks
 * @param {Number} max
 * @param {function} callback
 */
export function startLimitPool (tasks, max, callback) {
  const result = []
  Promise.all(
    Array.from({ length: max }).map(() => {
      return new Promise(resolve => {
        function runTask () {
          if (tasks.length <= 0) {
            resolve()
            return
          }
          const task = tasks.shift()
          task().then(res => {
            result.push(res)
            runTask()
          })
        }
        runTask()
      })
    })
  ).then(() => callback(result))
}

/**
 * 返回字段与定义字段对应
 * @param {Object} returnobj
 * @param {Object} responseobj
 */
export function responseAssignment (returnobj, responseobj) {
  let obj = returnobj
  let arr = Object.keys(responseobj)
  let compare = Object.keys(responseobj).map(res => res.toLowerCase())

  for (let key in obj) {
    if (compare.indexOf(key.toLowerCase()) > -1) {
      obj[key] = responseobj[arr[compare.indexOf(key.toLowerCase())]]
    }
  }

  return obj
}
