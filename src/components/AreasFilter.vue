<template>
    <div class="container">
        <ul class="filter">
            <li v-for="(area, index) in areas" :key="index">
                <input 
                type="radio" 
                class="hide"
                v-model="filterAreas" 
                :id="area" 
                :value="area" 
                />
                <label :for="area">{{ area }}</label>
            </li>
        </ul>        
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters({
            areas: 'getAreas'
        }),
        filterAreas: {
            get() {                
                return this.$store.state.meals
            },
            set(area) {
                this.$store.getters.getFilteredMealsByArea(area)
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