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
  Aside,
  Button,
  Carousel,
  CarouselItem,
  Card,
  Checkbox,
  CheckboxGroup,
  Container,
  Col,
  Descriptions,
  DescriptionsItem,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Link,
  Loading,
  Main,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Pagination,
  Radio,
  RadioGroup,
  Row,
  Select,
  Submenu,
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
    Vue.use(Aside)
    Vue.use(Button)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Card)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    Vue.use(Container)
    Vue.use(Col)
    Vue.use(Descriptions)
    Vue.use(DescriptionsItem)
    Vue.use(Dialog)
    Vue.use(Divider)
    Vue.use(Drawer)
    Vue.use(Dropdown)
    Vue.use(DropdownItem)
    Vue.use(DropdownMenu)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Header)
    Vue.use(Icon)
    Vue.use(Input)
    Vue.use(Link)
    Vue.use(Loading)
    Vue.use(Main)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(Pagination)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    Vue.use(Row)
    Vue.use(Select)
    Vue.use(Submenu)
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
