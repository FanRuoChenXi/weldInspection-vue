/*
 * @Author: 黄施能 m18268323892@163.com
 * @Date: 2023-4-20 11:44:04
 * @LastEditors: 黄施能 m18268323892@163.com
 * @LastEditTime: 2023-4-20 18:23:20
 * @FilePath: /weldInspection/src/api/vant.js
 * @Description: 按需引入 Vant 组件
 */
import { Button, Field, Form, Toast } from 'vant'
const vant = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Field)
    Vue.use(Form)
    Vue.use(Toast)
  },
}
export default vant
