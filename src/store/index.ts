import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenBGAnimation: true,
    isShowResume: false,
  },
  mutations: {
    changeBGAnimation(state, e) {
      state.isOpenBGAnimation = e
    },
    changeResumeState(state, e) {
      state.isShowResume = e
    }
  },
  actions: {},
  modules: {}
})
