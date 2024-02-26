import axios from "@/plugins/axios";
import router from "@/router";

import { SET_TOKEN } from "./mutation-types";

export const authStore = {
  namespaced: true,
  state: () => ({
    token: "",
  }),
  getters: {
    isAuthenticated: state => Boolean(state.token.length > 0)
  },
  mutations: {
    [SET_TOKEN](state, token) {
      if (!token) return
      state.token = token
    }
  },
  actions: {
    login({ commit, dispatch }, token) {
      commit('SET_TOKEN', token)
      localStorage.setItem('token', token)
      router.$token = token
      axios.defaults.headers.common.Authorization = token
      dispatch('changeAppScope', 'PRIVATE', { root: true })
    },
    logout({ commit, dispatch }) {
      commit('SET_TOKEN', '')
      localStorage.removeItem('token')
      router.$token = ''
      axios.defaults.headers.common.Authorization = ''
      dispatch('changeAppScope', 'PUBLIC', { root: true })
    }
  }
};
