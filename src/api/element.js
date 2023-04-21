/*
 * @Author: 黄施能 m18268323892@163.com
 * @Date: 2023-4-20 11:44:04
 * @LastEditors: 黄施能 m18268323892@163.com
 * @LastEditTime: 2023-4-20 18:23:20
 * @FilePath: /weldInspection/src/api/element.js
 * @Description: 按需引入 element
 */
import {
  Alert,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  CheckboxGroup,
  Descriptions,
  DescriptionsItem,
  Dialog,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  Link,
  Loading,
  Message,
  MessageBox,
  Radio,
  RadioGroup,
  Select,
  Option,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  Tooltip,
  Upload,
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Alert)
    Vue.use(Button)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(Descriptions)
    Vue.use(DescriptionsItem)
    Vue.use(Dialog)
    Vue.use(Divider)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Icon)
    Vue.use(Input)
    Vue.use(Link)
    Vue.use(Loading)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(TabPane)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tabs)
    Vue.use(Tag)
    Vue.use(Tooltip)
    Vue.use(Upload)
    Vue.prototype.$msg = Message
    Vue.prototype.$msgbox = MessageBox
  },
}
export default element
