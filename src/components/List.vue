<template>
    <div>
      <SearchBar />
    <ul>
      <li v-for="(list, index) in filteredMeals" :key="index">
        <p>{{ list.strMeal }}</p>
      </li>
    </ul>
    </div>
</template>

<script>
import SearchBar from './SearchBar'

export default {
  components: {
    SearchBar
  },
  mounted() {
    this.$store.dispatch('GET_MEALS_LIST')
  } ,
  computed: {
    filteredMeals () {
        let filtred = (this.$store.getters.getFilteredMeals|| this.$store.getters.allMeals)
        return filtred
    }
  }  
}
</script>