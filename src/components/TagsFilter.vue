<template>
    <div class="container">
        <ul class="filter">
            <li v-for="(tag, index) in tags" :key="index">
                <input 
                type="radio" 
                class="hide" 
                v-model="filterTags"
                :id="tag" 
                :value="tag" 
                />
                <label :for="tag">{{ tag }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters({
            tags: 'getTags'
        }),
        filterTags: {
            get() {                
                return this.$store.state.meals
            },
            set(tag) {
                this.$store.getters.getFilteredMealsByTag(tag)
            }
        }
    }
}
</script>
<style scoped>
.hide {
    display: none;
}

label {
    cursor: pointer;
}
</style>