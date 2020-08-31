<template>
  <input type="text" v-model="searchWord" />
</template>

<script>
export default {
  computed: {
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (value) {
        this.$store.dispatch('FILTERED_MEALS', value)
      }
    }    
  }
};
</script>