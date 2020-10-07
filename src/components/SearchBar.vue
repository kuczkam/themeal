<template>
  <div class="container-search">
    <input class="search" type="text" v-model="searchMeal" /> 
  </div>
</template>

<script>
export default {
  computed: {
    searchMeal: {
      get () {
        return this.$store.state.searchMeal
      },
      set (name) {
        this.$store.getters.getFilteredMealsByName(name)
      }
    }        
  }
};
</script>
<style scoped>
.container-search {
  width: 50%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search {
  width: 500px;
  height: 25px;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #eae5e5;
}
</style>