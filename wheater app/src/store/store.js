import { createStore } from 'vuex';
import axios from 'axios'; // Importación de axios
import { API_URL } from '../../env';

const store = createStore({
  state: {
    city: '',
    weather: null,
    pronostic: [],
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setPronostic(state, pronostic) {
      state.pronostic = pronostic;
    }
  },
  actions: {
    fetchWeather({ commit, state }) {
      const apiKey = "088eee181164c5751c6967dbabfb2029";
      const API_URL = import.meta.env.VITE_API_WHEATHER_URL_PRONOSTIC_1DAY;

      if (state.city) {
        axios.get(`${API_URL}${state.city}&appid=${apiKey}`)
          .then((response) => {
            commit('setWeather', response.data);
          })
          .catch(() => {
            commit('setWeather', null);
            alert("Ingrese ciudad válida");
          });
      } else {
        commit('setWeather', null);
      }
    },
    fetchPronostic({ commit, state }) {
      const apiKey = "088eee181164c5751c6967dbabfb2029";
      const API_URL = import.meta.env.VITE_API_WHEATHER_URL_PRONOSTIC_5DAY;

      if (state.city) {
        axios.get(`${API_URL}${state.city}&appid=${apiKey}`)
          .then((response) => {
            commit('setPronostic', response.data.list);
          })
          .catch(() => {
            console.error("La petición falló");
          });
      }
    }
  },
  getters: {
    city: state => state.city,
    weather: state => state.weather,
    pronostic: state => state.pronostic
  }
});

export default store;