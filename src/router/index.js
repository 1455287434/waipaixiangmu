import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
// 选择系统
import selectSystem from '../views/selectSystem'
// 能源系统
/* ----------------------- */
import energySystem from '../views/energySystem'
import timeTask from '../views/energySystem/systemConfig'
import energyType from '../views/energySystem/energyConfig/energyType'
import equipmentConfig from '../views/energySystem/energyConfig/equipmentConfig'
/* ----------------------- */
// 设备系统
/* ----------------------- */
import equipmentSystem from '../views/equipmentSystem'
/* ----------------------- */
// 运维系统
/* ----------------------- */
import operationSystem from '../views/operationSystem'
/* ----------------------- */
// 容器主页
import home from '../layout/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/selectSystem'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/selectSystem',
    name: 'selectSystem',
    component: selectSystem
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      /* ----------能源系统------------- */
      {
        path: '/energySystem',
        name: 'energySystem',
        component: energySystem,
        meta: { title: '能源系统', path: '/energySystem' }
      },
      {
        path: '/timeTask',
        name: 'timeTask',
        component: timeTask,
        meta: { title: '定时任务', path: '/timeTask' }
      },
      {
        path: '/energyType',
        name: 'energyType',
        component: energyType,
        meta: { title: '能源类型配置', path: '/energyType' }
      },
      {
        path: '/equipmentConfig',
        name: 'equipmentConfig',
        component: equipmentConfig,
        meta: { title: '设备配置', path: '/equipmentConfig' }
      },
      /* ------------------------- */
      /* ------------设备系统------------- */
      {
        path: '/equipmentSystem',
        name: 'equipmentSystem',
        component: equipmentSystem,
        meta: { title: '设备系统', path: '/equipmentSystem' }
      },
      {
        path: '/accountManagement',
        name: 'accountManagement',
        component: () => import('../views/equipmentSystem/accountManagement/equipment'),
        meta: { title: '设备系统', path: '/equipmentSystem' }
      },
      /* ------------------------- */
      /* ------------运维系统------------- */
      {
        path: '/operationSystem',
        name: 'operationSystem',
        component: operationSystem,
        meta: { title: '运维系统', path: '/operationSystem' }
      },
      {
        path: '/calculationFormula',
        name: 'calculationFormula',
        component: () => import('../views/operationSystem/calculationFormula'),
        meta: { title: '计算公式', path: '/calculationFormula' }
      },
      {
        path: '/calculationFormulaDetal',
        name: 'calculationFormulaDetal',
        component: () => import('../views/operationSystem/calculationFormula/calculationFormulaDetal.vue'),
        meta: { title: '计算公式', path: '/calculationFormulaDetal' }
      },
      {

        path: '/organizeLargeScreen',
        name: 'organizeLargeScreen',
        component: () => import('../views/operationSystem/organizeLargeScreen'),
        meta: { title: '组织大屏', path: '/organizeLargeScreen' }
      }
      /* ------------------------- */
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
