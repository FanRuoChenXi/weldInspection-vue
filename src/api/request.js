import axios from 'axios'
import cookie from 'js-cookie'
import Vue from 'vue'
import router from '../router'

const SSO_HOST = {
  release: 'https://oneid.geemro.com/oneid-php/public/index.php/', // 发布版接口地址
  trial: 'https://trial.geemro.com/oneid-php/public/index.php/', // 体验版接口地址
  develop: 'https://dev.geemro.com/oneid-php/public/index.php/', // 开发版接口地址
  local: '/api-proxy/', // 本地版接口地址
  mock: 'http://192.168.2.99:4523/mock/997517/', // 本地 MOCK 接口地址
}

const DATA_HOST = {
  release: 'https://pms.geemro.com/pms-php/public/index.php/', // (发布版)数据中心OneData接口
  trial: 'https://trial.geemro.com/pms-php/public/index.php/', // (体验版)数据中心OneData接口
  develop: 'https://dev.geemro.com/pms-php/public/index.php/', // (开发版)数据中心OneData接口
  local: '/api-pms/', // 本地版接口地址
}

const BASE_HOST = {
  release: 'https://pms.geemro.com/manage-php/public/index.php/', // 发布版接口地址
  trial: 'https://trial.geemro.com/manage-php/public/index.php/', // 体验版接口地址
  develop: 'https://dev.geemro.com/manage-php/public/index.php/', // 开发版接口地址
  local: '/api-manage/', // 本地版接口地址
  mock: 'http://192.168.2.99:4523/mock/997517/', // 本地 MOCK 接口地址
}

const getEnvironment = () => {
  const { domain } = document
  if (domain.includes('pms.geemro.com')) return 'release' // 判断生产环境
  if (domain.includes('trial.pms') || domain.includes('trial.geemro'))
    return 'trial' // 判断体验环境
  if (domain.includes('dev.pms') || domain.includes('dev.geemro'))
    return 'develop' // 判断开发环境
  if (domain.includes('localhost') || domain.includes('192.168')) return 'local' // 判断本地环境
  console.error('当前部署环境异常')
  return 'mock'
}
const ENV = getEnvironment()
// const BASE_URL = URL[ENV]
// const MOCK_URL = URL.mock

const getBaseUrl = (params) => {
  if (params.mock) return BASE_HOST['mock'] // Mock地址
  if (params.host == 'sso') return SSO_HOST[ENV] // 用户中心认证地址
  if (params.host == 'pms') return DATA_HOST[ENV] // 数据接口地址
  return BASE_HOST[ENV] // 后端接口地址
}

/**
 * axios 请求
 * @param {String} api 请求的api接口
 * @param {Object} params 请求参数
 * @return {Function} 请求成功后继续处理数据
 */
const get = (api, params = {}) => request(api, params, 'get')
const post = (api, params = {}) => request(api, params, 'post')
async function request(api, params = {}, method = 'get') {
  try {
    // const url = params.mock ? MOCK_URL + api : BASE_URL + api
    const url = getBaseUrl(params) + api // 拼接接口地址
    let config = {} // 用于文件上传时, 传入参数为 FormData 格式, 需额外设置 Content-Type
    if (Object.prototype.toString.call(params) === '[object FormData]') {
      config = { headers: { 'Content-Type': 'multipart/form-data' } }
    } else {
      params = _requestFit(params) // 请求前的数据适配
    }
    const response =
      method == 'post'
        ? await axios.post(url, params, config)
        : await axios.get(url, { params })
    const data = _responseFit(response?.data) // 对返回数据适配
    _printLog(api, params, response)
    const errMsg =
      typeof data.msg == 'string' ? data.msg : JSON.stringify(data.msg)
    return data.ok ? [data.data, null] : [data.data, errMsg] // 正常时取出data返回, 异常时返回信息, 格式均为 [res, err]
  } catch (err) {
    Vue.prototype.$msg.error(err)
  }
}

// 请求发送前的数据适配 (驼峰转下划线)
function _requestFit(data) {
  return _camel2snake(data)
}

// 请求返回后的数据适配 (下划线转驼峰)
function _responseFit(data) {
  if (data.code == 2001) {
    cookie.remove('TOKEN')
    return router.replace('/') // 2001未登录
  }
  return _snake2camel(data)
}

// 下划线转驼峰
function _snake2camel(data) {
  if (typeof data !== 'object' || !data) return data
  if (Array.isArray(data)) return data.map((item) => _snake2camel(item))
  const fitData = {}
  for (const key in data) {
    const newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
    fitData[newKey] = _snake2camel(data[key])
  }
  return fitData
}
// 驼峰转下划线
function _camel2snake(data) {
  if (typeof data !== 'object' || !data) return data
  if (Array.isArray(data)) return data.map((item) => _camel2snake(item))
  const fitData = {}
  for (const key in data) {
    const newKey = key.replace(/([A-Z])/g, (p, m) => `_${m.toLowerCase()}`)
    fitData[newKey] = _camel2snake(data[key])
  }
  return fitData
}

// 控制台打印返回
function _printLog(api, params, data) {
  if (ENV !== 'release') {
    console.group(api, params)
    if (params.mock) console.warn('✅ MOCK 返回')
    if (ENV === 'develop') console.log(data) // 开发环境下, 控制台打印返回
    if (ENV === 'trial') console.log(params, JSON.stringify(params))
    console.groupEnd()
  }
  return true
}

// 将请求方法注入全局 (在 main.js 里面 use 本文件)
const install = () => {
  Vue.prototype.$ENV = ENV // 当前环境
  Vue.prototype.$post = post
  Vue.prototype.$get = get
}

export default { install }
