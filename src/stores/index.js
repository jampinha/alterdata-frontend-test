import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { SET_APP_SCOPE, SET_READY_STATE } from "./mutation-types";

import { authStore } from "./auth.store";
import { userStore } from "./user.store";

const APP_SCOPES = ["BOOTING", "PUBLIC", "PRIVATE"];

export default new Vuex.Store({
  state: {
    ready: false,
    scope: "BOOTIING",
  },
  getters: {
    isBooting: (state) => Boolean(!state.ready),
    isOutside: (state) => Boolean(state.scope === "PUBLIC"),
    isInside: (state) => Boolean(state.scope === "PRIVATE"),
    currentScope: (state) => state.scope,
  },
  mutations: {
    [SET_READY_STATE](state) {
      state.ready = true;
    },
    [SET_APP_SCOPE](state, value) {
      const isValidValue = APP_SCOPES.includes(value.toUpperCase());

      if (!isValidValue) return;
      state.scope = value;
    },
  },
  actions: {
    changeAppScope({ commit }, scope) {
      commit("SET_APP_SCOPE", scope);
    },
  },
  modules: {
    auth: authStore,
    user: userStore,
  },
});
