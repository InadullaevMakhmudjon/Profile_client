import Vue from 'vue';
import Vuex from 'vuex';
import Api from './server/Api';
import Auth from './server/Auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'Empty',
  },
  mutations: {
    changedColor(state, color) {
      localStorage.setItem('color', color);
    },
    setToken(state, { token }) {
      // eslint-disable-next-line no-unused-expressions
      localStorage.setItem('token', token);
      Api.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log(`Token: ${token}`);
    },
    logout(state) {
      localStorage.removeItem('token');
    },
  },
  actions: {
    changedColor({ commit }, { color }) {
      commit('changedColor', color);
    },
    login: ({ commit }, { username, password }) => new Promise((resolve, reject) => {
      Auth.login({ username, password })
        .then((token) => {
          commit('setToken', { token });
          Auth.about().then((user) => {
            localStorage.setItem('user', user);
            resolve();
          }).catch(err => reject(err));
        }).catch(err => reject(err));
    }),
  },
});
