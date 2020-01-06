import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalTvCount: 10,
    isLarryHappy: true,
    isJennyHappy: true
  },
  getters: {
    happyStaff: state => {
      return state.isLarryHappy && state.isJennyHappy
    }
  },
  mutations: {
    removeTv(state, amount) {
      state.totalTvCount -= amount
    }
  },
  actions: {
    removeTv(context, amount) {
      if(context.state.totalTvCount >= amount) {
        context.commit('removeTv', amount)
      }
    }
  },
  modules: {
  }
})
