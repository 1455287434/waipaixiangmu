import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    msgCount: null,
    theme: '',
    tagColor: '#409EFF',
    switchType: true,
    refreshStatus: false,
    menu: [],
    tags: [],
    tagsJudge: false
  },
  mutations: {
    changeRefreshStatus (state, val) {
      state.refreshStatus = val
    },
    setMenu (state, val) {
      state.menu = val
    }
  },
  actions: {
    changeRefreshStatusFn (context, val) {
      context.commit('changeRefreshStatus', val)
    },
    setMenuFn (context, val) {
      context.commit('setMenu', val)
    }
  }
})
