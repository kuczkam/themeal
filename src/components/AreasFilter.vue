<template>
    <div class="container">
        <ul>
            <li v-for="(list, index) in meals" :key="index">
                <input 
                type="radio" 
                class="hide" 
                v-model="filterAreas" 
                :id="list.strArea" 
                :value="list.strArea" 
                />
                <label :for="list.strArea">{{ list.strArea }}</label>
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
        filterAreas: {
            get() {                
                return this.$store.state.meals
            },
            set(area) {
                this.$store.dispatch('FILTERED_MEALS_BY_AREA', area)
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
