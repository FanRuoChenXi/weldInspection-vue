export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCaZQlvzyd2jLJAI62Zclrw6NhJ
9vKpnHNiQJJIC58KXcYtw36x3a6YsGva4qYRhuT6uC8/vS5cYTb5Gc4MOvC1vIOn
ni/nQyi/z5KIxhdZcIky7PqwSnRFqIR2IDJYQJbo99wiAaBlKeu1mL7a+GMMJu9x
OO2vGARft/xXaal0awIDAQAB
-----END PUBLIC KEY-----`

export const TmapKey = 'TZ4BZ-WSLRQ-52Z5M-GFFJ3-4T3XQ-6HBV4'

// 会员卡办卡方式 
export const ADD_VIPCARD_METHOD = {
  1: "积分升级",
  10: "微信支付新购",
  11: "微信支付升级",
  100: "线下新购",
  101: "线下升级"
}

// 优惠券核销方式
export const CHECK_USER_TYPE = [
  { label: 'PMS', value: 10 },
  { label: 'PMS管理后台', value: 20 },
  { label: '小程序预订核销', value: 30 },
]

// 服务类型
export const SERVE_TYPE = [
  { label: '短信', value: 2, },
  { label: 'PMS系统续费', value: 10, }
]
// 服务付费类型
export const SERVE_CHANNEL = [
  { label: '其它', value: 0, },
  { label: '赠送', value: 1, },
  { label: '扫码付', value: 10, },
  { label: '退款', value: 100, },
]

// 支付类型
export const PLATFORM = [
  { label: '线下', value: 0, },
  { label: '微信支付', value: 1, }
]

// 短信发送状态
export const SMS_STATE = [
  { label: '已送达', value: 100, },
  { label: '未送达', value: 120, },
  { label: '发送中', value: 130, },
]

// 消费科目属性
export const CSONSUM_ITEM_ATTRIBUTE = [
  { label: "允许在PMS房单中选择本科目入账", key: "isPmsAvailable", truelabel: 1, falselabel: 2 },
  { label: "允许在PMS杂账中选择本科目入账", key: "isPmsSundryAvailable", truelabel: 1, falselabel: 2 },
  { label: "入账时允许填写负数金额", key: "amountLimit", truelabel: 3, falselabel: 1 },
  { label: "入账时必须需填凭证号", key: "needVoucherNo", truelabel: 1, falselabel: 2 },
  { label: "入账后计入可开票金额", key: "canInvoice", truelabel: 1, falselabel: 2 },
];

// 结算科目属性
export const SETTLEMENT_ITEM_ATTRIBUTE = [
  { label: "允许在PMS房单中选择本科目入账", key: "isPmsAvailable", truelabel: 1, falselabel: 2 },
  { label: "允许在PMS杂账中选择本科目入账", key: "isPmsSundryAvailable", truelabel: 1, falselabel: 2 },
  { label: "入账后允许退款", key: "canRefund", truelabel: 1, falselabel: 2 },
  { label: "入账时允许填写负数金额", key: "amountLimit", truelabel: 3, falselabel: 1 },
  { label: "入账时必须需填凭证号", key: "needVoucherNo", truelabel: 1, falselabel: 2 },
];


// 菜单数据
export { default as MENU_LIST } from './menuList'
// 房价码-定价规则
export const ROOM_RATE_CODE_RULE = [{
  label: '以门市价为基准,设置折扣',
  value: 1
}, {
  label: '以门市价为基准,设置差价',
  value: 2
}, {
  label: '设置固定房价',
  value: 3
}]
// 积分抵房费限额类型
export const INTEGRAL_DEDUCT_TYPE = [
  { label: '关闭', value: 1 },
  // { label: '按固定积分设置', value: 10 },
  { label: '按房费比例设置', value: 20 }
]
// 自定义权限
export const CUSTOM_PERMISSION = [
  { label: '继承岗位权限', value: '[]' },
  { label: '自定义访问权限', value: 1 },
  { label: '关闭访问权限', value: '[-1]' }
]
// 优惠券状态
export const COUPON_STATUS = [
  { label: '已启用', value: 100 },
  { label: '已停用', value: 200 }
]
// 优惠券发放对象
export const COUPON_OBJECT = [
  { label: '个人会员', value: 0 },
]
// 优惠券使用状态
export const COUPON_USE_STATUS = [
  { label: '已领取', value: 100, color: 'success' },
  { label: '已核销', value: 150, color: 'info-text' }
]
// 优惠券生效规则
export const COUPON_EFFECT_RULE = [
  { label: '核销当日生效', value: 1 },
  // { label: '自核销日起每天生效', value: -1 }
]
// 优惠券发放渠道
export const COUPON_GRANT_CHANNEL = [
  { label: '门店', value: 10 },
  { label: '集团', value: 20 },
  { label: '自动赠券', value: 40 },
]
// 优惠券类型
export const COUPON_TYPE = [
  { label: '免费房', value: 1 },
  // { label: '代金券', value: 2 },
  { label: '抵扣券', value: 3 }
]
// 优惠券生效时间
export const COUPON_TIME = [
  { label: '固定日期', value: 1 },
  { label: '弹性日期', value: 2 },
]
// 餐券类型
export const MEAL_COUPON_TYPE = [
  { label: '早餐', value: 1 },
  { label: '中餐', value: 2 },
  { label: '晚餐', value: 3 },
]
// 自动赠券事件
export const COUPON_AUTO_GIVE_EVENT = [
  { label: '办理会员卡', value: 20, keywords: '办理', },
  { label: '结账离店', value: 30, keywords: '结账离店', },
  { label: '生日赠券', value: 40, keywords: '生日', },
  { label: '发布点评', value: 50, keywords: '发布点评', },
]
// 自动赠积分事件
export const POINT_AUTO_GIVE_EVENT = [
  { label: '办理会员卡', value: 20, keywords: '办理', },
  { label: '结账离店', value: 30, keywords: '结账离店', },
  { label: '会员生日', value: 40, keywords: '生日', },
  { label: '发布点评', value: 50, keywords: '发布点评', },
]
// 自动赠券客源类型
export const COUPON_AUTO_GUEST_TYPE = [
  { label: '个人会员', value: 2 },
  { label: '企业会员', value: 4 },
  { label: '全部', value: 6 },
]

// 操作日志-状态
export const OPLOG_STATUS = [
  { label: '成功', value: 100 },
  { label: '失败', value: 150 },
  { label: '系统异常', value: 200 }
]
// 协议状态
export const UNIT_STATUS = [
  { label: '待确认', value: 10 },
  { label: '有效', value: 100 },
  { label: '删除', value: 250 }
]
// 协议方案状态
export const UNIT_SCHEME_STATUS = [
  { label: '待审核', value: 10 },
  { label: '正常', value: 100 },
  { label: '已驳回', value: 150 }
]
// 协议类别
export const UNIT_TYPE = [
  { label: '企业会员', value: 4 },
  { label: '中介', value: 8 },
  { label: '团队', value: 16 }
]
// 发票类型
export const INVOICE_TYPE = [
  { label: '电普票', value: 10 },
  { label: '纸普票', value: 20 },
  { label: '电专票', value: 30 },
  { label: '纸专票', value: 40 }
]
// 发票状态
export const INVOICE_STATUS = [
  { label: '未开', value: 10 },
  { label: '已开', value: 100 },
  { label: '拒开', value: 150 },
  { label: '取消', value: 200 }
]
// 发票提交来源
export const INVOICE_SOURCE = [
  { label: '门店', value: 1 },
  { label: '小程序', value: 2 }
]
// 租类
export const RENT_TYPE = [
  { label: '全天房', value: 1 },
  { label: '钟点房', value: 2 },
]
// 科目类别
export const BILL_ITEM_TYPE = [
  { label: '消费', value: 1 },
  { label: '结算', value: 2 },
]
// 核销状态
export const VER_STATUS = [
  { label: '未核销', value: 10 },
  { label: '已核销', value: 100 },
  { label: '已驳回', value: 150 },
]
// 结算周期
export const SETTLE_CYCLE = [
  { label: '周结', value: 7 },
  { label: '半月结', value: 15 },
  { label: '月结', value: 30 },
  { label: '双月结', value: 60 },
  { label: '季结', value: 90 },
]

// 价格类型
export const PRICE_TYPE = [
  { label: '基准价', value: 1 },
  { label: '临时价', value: 2 },
]
// 渠道
export const CHANNEL = [
  { label: '门店', value: 10 },
  { label: 'PMS管理后台', value: 20 },
  { label: '小程序', value: 30 },
]
// 房价生效状态
export const PRICE_STATUS = [
  { label: '失效', value: 101, color: 'info-text' },
  { label: '待确认', value: 10, color: 'danger' },
  { label: '生效中', value: 100, color: 'success' },
  { label: '未到开始生效日期', value: 99, color: 'warning' },
  { label: '取消', value: 200, color: 'info-text' },
]
// 钟点房设置记录生效状态
export const HOUR_ROOM_STATUS = [
  { label: '正常', value: 100, color: 'success' },
  { label: '已取消', value: 200, color: 'info-text' },
]
// 商品状态
export const GOODS_STATUS = [
  { label: '在售', value: 100 },
  { label: '停售', value: 200 },
]
// 房单状态
export const ROOM_ORDER_STATUS = [
  { label: "未付", value: 10, color: "order-XD-C" },
  { label: "取消", value: 20, color: "order-QX-C " },
  { label: "预订", value: 50, color: "order-YD-C " },
  { label: "NOSHOW", value: 60, color: "order-NOSHOW-C " },
  { label: "已排房", value: 90, color: "order-YPF-C " },
  { label: "在住", value: 100, color: "order-ZZ-C " },
  { label: "离店", value: 150, color: "order-LD-C " },
  { label: "离店未结", value: 200, color: "order-LDWJ-C " },
];
// 客源
export const GUEST_TYPE = [
  { label: '散客', value: 1 },
  { label: '会员', value: 2 },
  { label: '协议', value: 3 },
]
// 客源
export const GUEST_TYPE_ALL = [
  { label: '散客', value: 1 },
  { label: '会员', value: 2 },
  { label: '企业会员', value: 4 },
  { label: '中介', value: 8 },
  { label: '团队', value: 16 },
]
// 担保状态
export const HAS_GUARANTEE = [
  { label: '有担保', value: 1 },
  { label: '无担保', value: 2 },
]
// 会员类型
export const VIP_TYPE = [
  { label: '本店会员', value: 1 },
  { label: '他店会员', value: 2 },
  { label: '联盟会员', value: 3 },
]
// 会员级别
export const VIP_LEVEL = [
  { label: '普卡', value: 10 },
  { label: '银卡', value: 20 },
  { label: '金卡', value: 30 },
  { label: '铂金卡', value: 40 },
]
// 性别
export const GENDER = [
  { label: "男", value: 1 },
  { label: '女', value: 2 },
  { label: "未知", value: 3 },
]
// 评论类型
export const COMMENT_TYPE = [
  { label: '有图', value: 1 },
  { label: '差评', value: 2 },
]

// 评论排序方式
export const COMMENT_SORT = [
  { label: '新入住优先', value: 1 },
  { label: '新点评优先', value: 2 },
]

// 评论状态
export const COMMENT_STATUS = [
  { label: '待回复', value: 10 },
  { label: '已回复', value: 100 },
  { label: '已隐藏', value: 200 },
]

// 房价码类别
export const ROOM_RATE_CODE = [
  { label: '门市价', value: 1 },
  { label: '普卡', value: 10 },
  { label: '银卡', value: 20 },
  { label: '金卡', value: 30 },
  { label: '铂金卡', value: 40 },
  { label: '协议类', value: 100 },
]
// 房价码类别
export const ROOM_RATE_CODE_TYPE = [
  { label: '协议类', value: 100 },
]
// 房价码计算方式
export const ROOM_RATE_CODE_METHOD = [
  { label: '折扣倍数', value: 1 },
  { label: '降价额度', value: 2 },
  { label: '固定房价', value: 3 },
]
// 星期数组
export const WEEKDAY_ARRAY = [
  { label: '周一', value: 1 },
  { label: '周二', value: 2 },
  { label: '周三', value: 3 },
  { label: '周四', value: 4 },
  { label: '周五', value: 5 },
  { label: '周六', value: 6 },
  { label: '周日', value: 7 },
]

// 弹框中客源类型下拉框
export const D_GUEST_TYPE = [
  { label: "企业会员", value: 0 },
  { label: "个人会员", value: 1 },
];
// 挂账核销适用门店
export const AR_UNIT_LEVEL = [
  { label: "全部门店", value: 20 },
  { label: "适用单店", value: 10 },
];

// 房价调价记录状态
export const ROOM_CHANGE_RECORD = [
  { label: "待审批", value: 10 },
  { label: "正常", value: 100 },
  { label: "取消", value: 200 },
]

// 账项科目可入账金额
export const AMOUNT_LIMIT = [
  { label: '正数 ', value: 1 },
  { label: '负数', value: 2 },
  { label: '正负皆可', value: 3 },
]
// 门店状态
export const HOTEL_STATE = [
  { label: '开业', value: 100 },
  { label: '未开业', value: 110 },
  { label: '停业', value: 150 },
  { label: '过期', value: 200 },
]

// 门店状态
export const AR_UNIT = [
  { label: '启用', value: 100, color: 'success' },
  { label: '停用', value: 200, color: 'info-text' },
]

// 用户中心地址
export const SSO_HOST = {
  release: 'https://oneid.geemro.com', // 发布版用户认证主机地址
  trial: 'https://trial.geemro.com', // 体验版用户认证主机地址
  develop: 'https://dev.geemro.com', // 开发版用户认证主机地址
  local: 'https://dev.geemro.com', // 开发版用户认证主机地址
}

// 请求接口地址
export const URL = { //接口访问地址
  release: 'https://pms.geemro.com/manage-php/public/index.php/', // 发布版接口地址
  trial: 'https://trial.geemro.com/manage-php/public/index.php/', // 体验版接口地址
  develop: 'https://dev.geemro.com/manage-php/public/index.php/', // 开发版接口地址
  local: '/api-proxy/', // 本地版接口地址
  mock: 'http://192.168.2.99:4523/mock/997517/', // 本地 MOCK 接口地址
}

// 批量导入门店房间字段 用于将中文转换为英文
export const IMPORT_ROOM_FIELD = ['room_name', 'room_type', 'floor', 'lock_code', 'preset_feature_array']

// 批量导入门店房型字段 用于将中文转换为英文
export const IMPORT_ROOM_TYPE_FIELD = ['name', 'company_brand_array']

// 批量导入用户房型字段 用于将中文转换为英文
export const IMPORT_USER_FIELD = ['name', 'user_job_name', 'phone', 'code', 'gender', 'hotel_array']

// 批量导入协议
export const IMPORT_UNIT_FIELD = ['unit', 'guest_type', 'sell_hotel', 'room_rate_code', 'hotel_array', 'active_date', 'expire_date']
