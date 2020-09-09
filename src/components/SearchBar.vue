<template>
  <input type="text" v-model="searchMeal" />
</template>

<script>
export default {
  computed: {
    searchMeal: {
      get () {
        return this.$store.state.searchMeal
      },
      set (name) {
        this.$store.dispatch('FILTERED_MEALS_BY_NAME', name)
      }
    }    
  }
};
</script>
