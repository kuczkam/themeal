<template>
    <div>
      <ul class="meal-list__items" :class="{'hidden': isActive >= 0}">
        <li v-for="(list, index) in filteredMeals" 
        :key="index" 
        class="meal-list__item"
        @click="Active(index)"
        :class="isActive === index ? 'active' : false"
        >
          <div class="meal-list__item-content" :style="{'background-image': `url(${list.strMealThumb})`}">
              <header>
                <h1>{{ list.strMeal }}</h1>
              </header>
          </div>
          <div v-if="isActive === index" class="meal-list__item-content-desc">
            <h1>Instructions</h1>
            <p>
              {{ list.strInstructions }}
            </p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: undefined,
    }
  },
  async mounted() {
    this.$store.dispatch('GET_MEALS_LIST')
  } ,
  computed: {
    filteredMeals () {
        let filtred = (this.$store.state.filteredMeals || this.$store.state.meals)
        console.log(this.isActive)
        return filtred
    },
  },
  methods: {
    Active(index) {
      this.isActive = this.isActive === index ? -1 : index
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}

.hidden li {
  opacity: 0.5;
}

li.active {
  opacity: 1;
}

.meal-list__items {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.meal-list__item {
  width: 250px;
  flex: 0 0 33%;
  margin-bottom: 20px;
}

.meal-list__item-content {
  height: 250px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 250px 211px;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.meal-list__item-content-desc {
    border-radius: 10px;
    border: 1px solid #ccc;
    position: absolute;
    width: 87.3%;
    left: 83px;
    height: 250px;
    z-index: 1;
    background: #fff;
    margin-top: 17px;
}

.meal-list__item-content > header {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 6px;
  background: #fff;
  overflow: hidden;
  height: 2em;
}

.meal-list__item-content > header > h1 {
  margin: 0;
  color: #000;
  font-size: 14px;
  font-weight: normal;
  position: relative;
  z-index: 1;
}

li.meal-list__item.active {
    margin-bottom: 287px;
}

* {
  box-sizing: border-box;
}
</style>
