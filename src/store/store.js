import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios)
export default new vuex.Store({
state: {
    meals: [],
    meal: [],
    searchWord: null,
    filteredMeals: null,
  },
  getters: {
    allMeals: (state) => state.meals,

    getMeal: (state) => state.meal,

    getSearchWord: (state) => state.searchWord,

    getFilteredMeals: (state) => state.filteredMeals
  },
  mutations: {
    SET_MEAL (state, course) {
      state.course = course
    },
    GET_MEALS_LIST(state, payload) {
        state.meals = payload
    }, 
    FILTERED_MEALS (state, word) {
      if (word !== '') {
          state.searchWord = word
          state.filteredMeals = state.meals.filter((meal) => {
            return meal.strMeal.toLowerCase().includes(word)
          })
      }
    }
  },
  actions: {
    SET_MEAL ({ commit }) {
      commit('SET_MEAL')
    },
    GET_MEALS_LIST ({ commit }) {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
            .then(response => {
                commit('GET_MEALS_LIST', response.data.meals)
        })
    },    
    FILTERED_MEALS ({ commit }, word) {
      commit('FILTERED_MEALS', word)
    }
  }
})