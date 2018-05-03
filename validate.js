let Validate = function () {
}
/**
 * 验证手机号
 * @param data String
 * @returns {boolean}
 */
Validate.prototype.isPhone = function (data) {
  if (!data) {
    return
  }
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(data)
}
/**
 * 验证电话号码
 * @param data
 * @returns {boolean}
 */
Validate.prototype.isTell = function (data) {
  if (!data) {
    return
  }
  return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(data)
}
export default Validate
