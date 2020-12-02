/**
 * 时间格式转换
 * @param {*} date 
 * @param {*} isHms 
 */
export const resolvingDate = (date, isHms) => {
  if (date) {
    var d = new Date(date);
    var month =
      d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
    var day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    var hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    var min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    var times =
      d.getFullYear() +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      min +
      ":" +
      sec;
    var timesisHms = d.getFullYear() + "-" + month + "-" + day;
    if (isHms) {
      return times;
    } else {
      return timesisHms;
    }
  }
}
