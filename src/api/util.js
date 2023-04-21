import Vue from 'vue'
import cookie from 'js-cookie'
import JSEncrypt from 'jsencrypt'
const pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaZQlvzyd2jLJAI62Zclrw6NhJ
9vKpnHNiQJJIC58KXcYtw36x3a6YsGva4qYRhuT6uC8/vS5cYTb5Gc4MOvC1vIOn
ni/nQyi/z5KIxhdZcIky7PqwSnRFqIR2IDJYQJbo99wiAaBlKeu1mL7a+GMMJu9x
OO2vGARft/xXaal0awIDAQAB
-----END PUBLIC KEY-----`

// 获取 RSA 加密密文
function getRsaCode(text) {
  let encryptStr = new JSEncrypt()
  encryptStr.setPublicKey(pubKey) // 设置加密公钥
  let data = encryptStr.encrypt(text.toString()) // 进行加密
  return data
}

// 获取 Element 表单验证对象
function getFormRule(row) {
  let rule = []
  if (row.required !== false) rule.push({ required: true, message: '请填写' + row.name, trigger: 'blur' })
  if (row.min) rule.push({ min: row.min, message: row.minMsg || '长度不符合要求', trigger: 'blur' })
  if (row.max) rule.push({ max: row.max, message: row.maxMsg || row.name + '长度过长' })
  if (row.validator) rule.push({ validator: row.validator })
  return rule
}

const install = () => {
  Vue.prototype.$cookie = cookie
  Vue.prototype.$getRsaCode = getRsaCode
  Vue.prototype.$getFormRule = getFormRule
}

export default {
  install
}
