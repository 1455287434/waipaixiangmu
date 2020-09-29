'use strict'
// 判断是否需要登录权限 以及是否登录
import router from '@/router'
import store from '@/store'
const energyMenuList = [
  {
    title: '系统设置',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '定时任务',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      }
    ]
  },
  {
    title: '能源配置',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/3',
    children: [
      {
        title: '能源类型配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4',
        children: []
      },
      {
        title: '设备配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/5',
        children: []
      },
      {
        title: '能耗成本管理配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/6',
        children: []
      },
      {
        title: '能源成本配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/7',
        children: []
      },
      {
        title: '设备报警',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/8',
        children: []
      },
      {
        title: '班组配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/9',
        children: []
      },
      {
        title: '检测点配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/10',
        children: []
      }
    ]
  },
  {
    title: '能源监测',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/15435431',
    children: [
      {
        title: '水监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4324241',
        children: []
      },
      {
        title: '天然气监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/43124214',
        children: []
      },
      {
        title: '设备告警',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4324123412',
        children: []
      },
      {
        title: '压缩空气监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/1423141235',
        children: []
      },
      {
        title: '热水监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/14123126',
        children: []
      },
      {
        title: '蒸汽监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/432',
        children: []
      },
      {
        title: '能源报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/123',
        children: []
      },
      {
        title: '运行日报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/124',
        children: []
      },
      {
        title: '配用电监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4312',
        children: [
          {
            title: '设备监测',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/21'
          }
        ]
      }
    ]
  },
  {
    title: '统计分析',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/123321',
    children: [
      {
        title: '能源统计',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/213',
        children: [
          {
            title: '电',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/224'
          },
          {
            title: '水',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/21235'
          },
          {
            title: '天然气',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23216'
          },
          {
            title: '热水',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23217'
          },
          {
            title: '蒸汽',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23218'
          },
          {
            title: '压缩空气',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23219'
          }
        ]
      },
      {
        title: '能源报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/33210',
        children: [
          {
            title: '分类能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/33211'
          },
          {
            title: '综合能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/33422'
          }
        ]
      }
    ]
  },
  {
    title: '能耗成本管理',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/223',
    children: [
      {
        title: '产量数据管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/303',
        children: []
      },
      {
        title: '统计分析',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/302',
        children: [
          {
            title: '能源统计',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/314'
          },
          {
            title: '能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/323'
          }
        ]
      },
      {
        title: '单耗管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/320',
        children: [
          {
            title: '单耗计划',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/331'
          },
          {
            title: '单耗监测',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/342'
          }
        ]
      }
    ]
  },
  {
    title: '能效分析',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/222',
    children: [
      {
        title: '设备利用率分析',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/301',
        children: []
      }
    ]
  }
]
const equipmentMenuList = [
  {
    title: '大数据监控',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '生产大屏',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      }
    ]
  },
  {
    title: '台账管理',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '设备台账管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '工装模具管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: [
          {
            title: '工装模具台账',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/2'
          }
        ]
      }
    ]
  },
  {
    title: '预防性维护',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '点巡检计划',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '点巡检记录',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '保养计划',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '保养记录',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '设备项',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      }
    ]
  },
  {
    title: '报修管理',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '我的工单',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '工单管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '报修管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '故障类型配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      }
    ]
  },
  {
    title: '统计分析',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '设备台账管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '工装模具管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: [
          {
            title: '工装模具台账',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/2'
          }
        ]
      }
    ]
  },
  {
    title: '委外维修',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '设备台账管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      },
      {
        title: '工装模具管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: [
          {
            title: '工装模具台账',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/2'
          }
        ]
      }
    ]
  }
]
const operationMenuList = [
  {
    title: '系统设置',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/1',
    children: [
      {
        title: '定时任务',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/2',
        children: []
      }
    ]
  },
  {
    title: '能源配置',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/3',
    children: [
      {
        title: '能源类型配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4',
        children: []
      },
      {
        title: '设备配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/5',
        children: []
      },
      {
        title: '能耗成本管理配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/6',
        children: []
      },
      {
        title: '能源成本配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/7',
        children: []
      },
      {
        title: '设备报警',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/8',
        children: []
      },
      {
        title: '班组配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/9',
        children: []
      },
      {
        title: '检测点配置',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/10',
        children: []
      }
    ]
  },
  {
    title: '能源监测',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/15435431',
    children: [
      {
        title: '水监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4324241',
        children: []
      },
      {
        title: '天然气监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/43124214',
        children: []
      },
      {
        title: '设备告警',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4324123412',
        children: []
      },
      {
        title: '压缩空气监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/1423141235',
        children: []
      },
      {
        title: '热水监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/14123126',
        children: []
      },
      {
        title: '蒸汽监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/432',
        children: []
      },
      {
        title: '能源报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/123',
        children: []
      },
      {
        title: '运行日报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/124',
        children: []
      },
      {
        title: '配用电监测',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/4312',
        children: [
          {
            title: '设备监测',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/21'
          }
        ]
      }
    ]
  },
  {
    title: '统计分析',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/123321',
    children: [
      {
        title: '能源统计',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/213',
        children: [
          {
            title: '电',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/224'
          },
          {
            title: '水',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/21235'
          },
          {
            title: '天然气',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23216'
          },
          {
            title: '热水',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23217'
          },
          {
            title: '蒸汽',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23218'
          },
          {
            title: '压缩空气',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/23219'
          }
        ]
      },
      {
        title: '能源报表',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/33210',
        children: [
          {
            title: '分类能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/33211'
          },
          {
            title: '综合能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/33422'
          }
        ]
      }
    ]
  },
  {
    title: '能耗成本管理',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/223',
    children: [
      {
        title: '产量数据管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/303',
        children: []
      },
      {
        title: '统计分析',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/302',
        children: [
          {
            title: '能源统计',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/314'
          },
          {
            title: '能源报表',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/323'
          }
        ]
      },
      {
        title: '单耗管理',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/320',
        children: [
          {
            title: '单耗计划',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/331'
          },
          {
            title: '单耗监测',
            icon: 'iconfont icon-shengchanjiagong',
            url: '/342'
          }
        ]
      }
    ]
  },
  {
    title: '能效分析',
    icon: 'iconfont icon-shengchanjiagong',
    url: '/222',
    children: [
      {
        title: '设备利用率分析',
        icon: 'iconfont icon-shengchanjiagong',
        url: '/301',
        children: []
      }
    ]
  }
]
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/energySystem') {
    // sessionStorage.menuList = JSON.stringify(energyMenuList)
    store.dispatch('setMenuFn', energyMenuList)
  }
  if (to.path === '/equipmentSystem') {
    // sessionStorage.menuList = JSON.stringify(equipmentMenuList)
    store.dispatch('setMenuFn', equipmentMenuList)
  }
  if (to.path === '/operationSystem') {
    // sessionStorage.menuList = JSON.stringify(operationMenuList)
    store.dispatch('setMenuFn', operationMenuList)
  }
  next()
})
