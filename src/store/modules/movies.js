import mutations from '../mutations';
import { axios as api } from '@/plugins';

const { MOVIES } = mutations;

const apiKey = process.env.VUE_APP_API_TOKEN;

const moviesStore = {
  namespaced: true,
  state: {
    items: null,
  },
  getters: {
    moviesList: ({ items }) => items,
  },
  mutations: {
    [MOVIES](state, items) {
      state.items = items;
    },
  },
  actions: {
    async searchMovies({ commit }, string) {
      try {
        const response = await api.get('/',{
          params: {
            apikey: apiKey,
            s: string,
          },
        });
        commit(MOVIES, response.data.Search);
      } catch (error) {
        console.log('Error', error); // eslint-disable-line no-console
      }
    },
    clearMovies({ commit }) {
      commit(MOVIES, null);
    },
  },
};

export default moviesStore;
