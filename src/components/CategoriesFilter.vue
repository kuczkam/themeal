<template>
    <div class="container">
        <ul class="filter">
            <li v-for="(category, index) in categories" :key="index">
                <input 
                type="radio" 
                class="hide" 
                v-model="filterCategories" 
                :id="category" 
                :value="category" 
                />
                <label :for="category">{{ category }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters({
            categories: 'getCategories'
        }),
        filterCategories: {
            get() {                
                return this.$store.state.meals
            },
            set(category) {
                this.$store.getters.getFilteredMealsByCategory(category)
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