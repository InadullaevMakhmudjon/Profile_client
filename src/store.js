import Vue from 'vue';
import Vuex from 'vuex';
import { AXIOS } from './server/Api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    changedColor(state, color) {
      localStorage.setItem('color', color);
    },
    setToken(state, { token }) {
      // eslint-disable-next-line no-unused-expressions
      localStorage.setItem('token', token);
      AXIOS.defaults.headers.common.Authorization = `Bearer ${token}`;
      // eslint-disable-next-line no-param-reassign
      state.token = token;
    },
    logout(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // eslint-disable-next-line no-param-reassign
      state.token = '';
    },
  },
  actions: {
    changedColor({ commit }, { color }) {
      commit('changedColor', color);
    },
    setToken: ({ commit }, { token }) => {
      commit('setToken', { token });
    },
  },
});
