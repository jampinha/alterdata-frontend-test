import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { SET_READY_STATE } from './mutation-types'  

export default new Vuex.Store({
  state: {
    ready: false,
  },
  getters: {
    isBooting: state => Boolean(!state.ready)
  },
  mutations: {
    [SET_READY_STATE] (state) {
      state.ready = true
    } 
  },
  actions: {
  },
  modules: {
  }
})
