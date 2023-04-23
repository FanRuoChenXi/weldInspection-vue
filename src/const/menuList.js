// 菜单列表
// TODO 可通过请求getPresetPermissionTree接口获取树，需要写个方法和路由匹配下^-^
export default [
  {
    presetPermissionId: 1,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 0,
    level: 2,
    title: '集团管理',
    icon: 'el-icon-menu',
    menu: 'group',
    children: [
      {
        presetPermissionId: 2,
        parentPresetPermissionId: 1,
        prePresetPermissionId: 0,
        level: 2,
        title: '门店信息',
        menu: '/group/combination',
      },
      {
        presetPermissionId: 7,
        parentPresetPermissionId: 1,
        prePresetPermissionId: 2,
        level: 2,
        title: '员工管理',
        menu: '/group/user',
      },
      {
        presetPermissionId: 12,
        parentPresetPermissionId: 1,
        prePresetPermissionId: 7,
        level: 2,
        title: '岗位管理',
        menu: '/group/job',
      },
      {
        presetPermissionId: 17,
        parentPresetPermissionId: 1,
        prePresetPermissionId: 12,
        level: 2,
        title: '集团设置',
        menu: '/group/groupSetting',
      },
      {
        presetPermissionId: 22,
        parentPresetPermissionId: 1,
        prePresetPermissionId: 17,
        level: 2,
        title: '操作日志',
        menu: '/group/oplog',
      },
    ]
  },
  {
    presetPermissionId: 24,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 1,
    level: 2,
    title: '运营中心',
    icon: 'el-icon-menu',
    menu: 'operate',
    children: [
      {
        presetPermissionId: 25,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 0,
        level: 2,
        title: '实时房态',
        menu: '/operate/roomState',
      },
      {
        presetPermissionId: 27,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 25,
        level: 2,
        title: '房态日历',
        menu: '/operate/calendar',
      },
      {
        presetPermissionId: 29,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 27,
        level: 2,
        title: '房单管理',
        menu: '/operate/roomOrder',
      },
      {
        presetPermissionId: 33,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 31,
        level: 2,
        title: '门店评价',
        menu: '/operate/hotelComment',
      },
      {
        presetPermissionId: 36,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 33,
        level: 2,
        title: '房型管理',
        menu: '/operate/roomType',
      },
      {
        presetPermissionId: 41,
        parentPresetPermissionId: 24,
        prePresetPermissionId: 36,
        level: 2,
        title: '房价码管理',
        menu: '/operate/roomRateCode',
      }
    ]
  },
  {
    presetPermissionId: 46,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 24,
    level: 2,
    title: '门店控制',
    icon: 'el-icon-menu',
    menu: 'hotel',
    children: [
      {
        presetPermissionId: 47,
        parentPresetPermissionId: 46,
        prePresetPermissionId: 0,
        level: 2,
        title: '房间管理',
        menu: '/hotel/room',
      },
      {
        presetPermissionId: 52,
        parentPresetPermissionId: 46,
        prePresetPermissionId: 47,
        level: 2,
        title: '房价管理',
        menu: '/hotel/roomPrice',
      },
      {
        presetPermissionId: 57,
        parentPresetPermissionId: 46,
        prePresetPermissionId: 52,
        level: 2,
        title: '钟点房管理',
        menu: '/hotel/hourRoom',
      },
      {
        presetPermissionId: 62,
        parentPresetPermissionId: 46,
        prePresetPermissionId: 57,
        level: 2,
        title: '商品列表',
        menu: '/hotel/goods',

      },
      {
        presetPermissionId: 67,
        parentPresetPermissionId: 46,
        prePresetPermissionId: 62,
        level: 2,
        title: '餐券列表',
        menu: '/hotel/mealCoupon',
      }
    ]
  },
  {
    presetPermissionId: 72,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 46,
    level: 2,
    title: '营销中心',
    icon: 'el-icon-menu',
    menu: 'market',
    children: [
      {
        presetPermissionId: 73,
        parentPresetPermissionId: 72,
        prePresetPermissionId: 0,
        level: 2,
        title: '优惠券',
        menu: '/market/coupon',
      },
      {
        presetPermissionId: 78,
        parentPresetPermissionId: 72,
        prePresetPermissionId: 73,
        level: 2,
        title: '自动赠券',
        menu: '/market/autoMatic',
      },
      {
        presetPermissionId: 314,
        parentPresetPermissionId: 72,
        prePresetPermissionId: 83,
        level: 2,
        title: '自动赠积分',
        menu: '/market/autoPoint',
      },
      {
        presetPermissionId: 83,
        parentPresetPermissionId: 72,
        prePresetPermissionId: 78,
        level: 2,
        title: '积分规则',
        menu: '/market/pointRule',
      }
    ]
  },
  {
    presetPermissionId: 87,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 72,
    level: 2,
    title: '客户关系',
    icon: 'el-icon-menu',
    menu: 'customer',
    children: [
      {
        presetPermissionId: 88,
        parentPresetPermissionId: 87,
        prePresetPermissionId: 0,
        level: 2,
        title: '会员列表',
        menu: '/customer/vip',
      },
      {
        presetPermissionId: 90,
        parentPresetPermissionId: 87,
        prePresetPermissionId: 88,
        level: 2,
        title: '协议列表',
        menu: '/customer/unit',
      }
    ]
  },
  {
    presetPermissionId: 95,
    parentPresetPermissionId: 0,
    prePresetPermissionId: 87,
    level: 2,
    title: '财务管理',
    icon: 'el-icon-menu',
    menu: 'bill',
    children: [
      {
        presetPermissionId: 96,
        parentPresetPermissionId: 95,
        prePresetPermissionId: 0,
        level: 2,
        title: '账项科目设置',
        menu: '/bill/billItem',
      },
      {
        presetPermissionId: 101,
        parentPresetPermissionId: 95,
        prePresetPermissionId: 96,
        level: 2,
        title: '发票列表',
        menu: '/bill/orderInvoice',
      },
      {
        presetPermissionId: 105,
        parentPresetPermissionId: 95,
        prePresetPermissionId: 101,
        level: 2,
        title: '挂账核销',
        menu: '/bill/arUnit',
      }
    ]
  }
]



