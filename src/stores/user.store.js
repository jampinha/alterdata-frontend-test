import { SET_USER_ACCOUNT, SET_USER_PROFILE } from "./mutation-types";

export const userStore = {
  namespaced: true,
  state: () => ({
    account: null,
    profile: null,
  }),
  getters: {
    isValid: (state) => Boolean(state.account && state.profile),
  },
  mutations: {
    [SET_USER_ACCOUNT](state, payload) {
      if (!payload) {
        state.account = null
        return
      }

      const { id, email, role } = payload
      state.account = { id, email, role };
    },
    [SET_USER_PROFILE](state, payload) {
      if (!payload) {
        state.profile = null
        return
      }

      const { id, email, name, photo } = payload
      state.profile = { id, email, name, photo };
    },
  },
  actions: {
    create({ commit }, { accountId, profileId, name, email, role, photo }) {
      commit("SET_USER_ACCOUNT", { id: accountId, email, role });
      commit("SET_USER_PROFILE", { id: profileId, email, name, photo });
      localStorage.setItem('user', accountId)
    },
    destroy({ commit }) {
      commit("SET_USER_ACCOUNT", null);
      commit("SET_USER_PROFILE", null);
    }
  },
};
