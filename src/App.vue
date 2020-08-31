<template>
<div id="app">
  <List />
  <!-- <p v-for="list in courses" :key="list.strId">{{list.strMeal}}</p> -->
</div>
</template>

<script>
// import { mapState } from 'vuex'
import List from  './components/List.vue'
 export default {
  name: 'App',
  components: {
    List
  },
  // mounted() {
  //   this.$store.dispatch('GET_MEALS_LIST')
  // },
  // computed: {
  //   ...mapState([
  //     'courses'
  //   ])
  // }
 }
</script>

<style>

</style>
