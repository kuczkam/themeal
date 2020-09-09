import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios)
export default new vuex.Store({
state: {
    meals: [],
    meal: [],
    searchMeal: null,
    filteredMeals: null,
  },
  getters: {
    allMeals: (state) => state.meals,
    getMeal: (state) => state.meal,
    getSearchWord: (state) => state.searchMeal,
    getFilteredMeals: (state) => state.filteredMeals
  },
  mutations: {
    SET_MEAL (state, course) {
      state.course = course
    },
    GET_MEALS_LIST (state, payload) {
        state.meals = payload
    }, 
    FILTERED_MEALS_BY_NAME (state, name) {
      if (name !== '') {
          state.searchMeal = name
          state.filteredMeals = state.meals.filter((meal) => {
            return meal.strMeal.toLowerCase().includes(name)
          })
      }
    },
    FILTERED_MEALS_BY_AREA (state, area) {
         state.filteredMeals = state.meals.filter((meal) => {
          return meal.strArea.includes(area)
        })
    },
    FILTERED_MEALS_BY_CATEGORY (state, category) {
      state.filteredMeals = state.meals.filter((meal) => {
       return meal.strCategory.includes(category)
     })
    },
    FILTERED_MEALS_BY_TAG (state, tag) {
      state.filteredMeals = state.meals.filter((meal) => {
        if (meal.strTags !== null) {
            return meal.strTags.includes(tag)
        }
     })
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
              console.log(response.data.meals)
              commit('GET_MEALS_LIST', response.data.meals)
        })
    },    
    FILTERED_MEALS_BY_NAME ({ commit }, name) {
      commit('FILTERED_MEALS_BY_NAME', name)
    },
    FILTERED_MEALS_BY_AREA ({ commit }, area) {
      commit('FILTERED_MEALS_BY_AREA', area)
    },
    FILTERED_MEALS_BY_CATEGORY ({ commit }, category) {
      commit('FILTERED_MEALS_BY_CATEGORY', category)
    },
    FILTERED_MEALS_BY_TAG ({ commit }, tag) {
      commit('FILTERED_MEALS_BY_TAG', tag)
    }    
  }
})
