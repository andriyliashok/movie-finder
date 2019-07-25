import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {},
});

store.dispatch('init');

export default store;
