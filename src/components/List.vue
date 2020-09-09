<template>
    <div>
      <SearchBar />
      <div>
        <AreasFilter />
      </div>
      <div>
        <CategoriesFilter />
      </div>
      <div>
        <TagsFilter />
      </div>               
    <ul>
      <li v-for="(list, index) in filteredMeals" :key="index">
        <p>{{ list.strMeal }}</p>
        <p>{{ list.strCategory }}</p>
        <p>{{ list.strArea }}</p>
        <p>{{ list.strTags }}</p>
      </li>
    </ul>
    </div>
</template>

<script>
import SearchBar from './SearchBar'
import AreasFilter from './AreasFilter'
import CategoriesFilter from './CategoriesFilter'
import TagsFilter from './TagsFilter'

export default {
  components: {
    SearchBar,
    AreasFilter,
    CategoriesFilter,
    TagsFilter
  },
  mounted() {
    this.$store.dispatch('GET_MEALS_LIST')
  } ,
  computed: {
    filteredMeals () {
        let filtred = (this.$store.getters.getFilteredMeals || this.$store.getters.allMeals)
        return filtred
    }
  }  
}
</script>
