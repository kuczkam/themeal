<template>
    <div class="container">
        <ul>
            <li v-for="(list, index) in meals" :key="index">
                <input 
                type="radio" 
                class="hide" 
                v-model="filterCategories" 
                :id="list.strCategory" 
                :value="list.strCategory" 
                />
                <label :for="list.strCategory">{{ list.strCategory }}</label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters({
            meals: 'allMeals'
        }),
        filterCategories: {
            get() {                
                return this.$store.state.meals
            },
            set(category) {
                this.$store.dispatch('FILTERED_MEALS_BY_CATEGORY', category)
            }
        }
    }
}
</script>
<style scoped>
ul {
    display: grid;
    grid-template-columns:repeat(25, 1fr);
    grid-gap:1em;
    list-style-type: none;
}

.hide {
    display: none;
}

label {
    cursor: pointer;
}
</style>
