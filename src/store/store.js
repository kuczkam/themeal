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
    allMeals: (state) => { 
      return state.meals 
    },
    getAreas: (state) => { 
      let areas = state.meals.map(meal => meal.strArea)
      let uniqueAreas = [ ...new Set(areas)]

      return  uniqueAreas
    },
    getTags: (state) => { 
      let tags = state.meals.map(meal => meal.strTags)
      let uniqueTags = [ ...new Set(tags)]
      let cleanTags = uniqueTags.filter((tag) => {
        return tag != null
      })

      return cleanTags
    },
    getCategories: (state) => { 
      let categories = state.meals.map(meal => meal.strCategory)
      let uniqueCategories = [ ...new Set(categories)]

      return  uniqueCategories
    },
    getFilteredMealsByName: (state) => (name) => {
      if (name !== '') {
          state.searchMeal = name
          state.filteredMeals = state.meals.filter((meal) => {
            return meal.strMeal.toLowerCase().includes(name)
          })
      }
    },
    getFilteredMealsByArea: (state) => (area) => {
      state.filteredMeals = state.meals.filter((meal) => {
        return meal.strArea.includes(area)
      })
    },
    getFilteredMealsByTag: (state) => (tag) => {
      state.filteredMeals = state.meals.filter((meal) => {
        if (meal.strTags !== null) {
            return meal.strTags.includes(tag)
        }
      })
    },
    getFilteredMealsByCategory: (state) => (cat) => {
      state.filteredMeals = state.meals.filter((meal) => {
        return meal.strCategory.includes(cat)
      })
    }
  },
  mutations: {
    GET_MEALS_LIST (state, payload) {
      state.meals = [ ...state.meals, ...payload ]
    },          
  },
  actions: {
    GET_MEALS_LIST ({ commit }) {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
            .then(response => {
             console.log(response.data.meals)
              commit('GET_MEALS_LIST', response.data.meals)
        })
    }
  }
})