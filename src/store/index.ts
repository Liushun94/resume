import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenBGAnimation: true
  },
  mutations: {
    changeBGAnimation(state, e) {
      state.isOpenBGAnimation = e
    }
  },
  actions: {},
  modules: {}
})
