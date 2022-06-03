import { createStore } from "vuex";

export default createStore({
  state: {
    movies: [],
    search: "Joker",
    loading: true,
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },
    changeSearch(state, payload) {
      state.search = payload;
    },
    changeLoad(state, payload) {
      !state.loading
    }
  },
  actions: {
    fetchMovies({ commit, state }) {
      fetch(`https://www.omdbapi.com/?s=Joker&apikey=191aac3f`)
        .then((res) => res.json())
        .then((data) => {
          commit("setMovies", data.Search);
          commit("changeLoad", false);
        });
    },
    searchMovies({ commit, state }, movieTitle) {
      if(movieTitle != "") {
        fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=191aac3f`)
        .then((response) => response.json())
        .then((data) => {
          commit("setMovies", data.Search);
          commit("changeLoad", false);
        });
      }      
    },
  },
  modules: {},
});
