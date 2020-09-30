import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/base.scss'
import '@/iconfont/iconfont.css'
import '@/util/routerIntercept'
import echarts from 'echarts'
import dataV from '@jiaminghi/data-view'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(dataV)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
