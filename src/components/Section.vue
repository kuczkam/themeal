<template>
<div class="wrapper">
    <nav class="col-1">
        <AreasFilter />
        <CategoriesFilter />
        <TagsFilter />
    </nav>
    <div class="col-2"> 
        <main class="content">
            <List />
        </main>
        <footer>Footer</footer>
    </div>
</div>  
</template>

<script>
import AreasFilter from './AreasFilter'
import CategoriesFilter from './CategoriesFilter'
import TagsFilter from './TagsFilter'
import List from './List'

export default {
  components: {
    AreasFilter,
    CategoriesFilter,
    TagsFilter,
    List
  },
}
</script>

<style>

</style>