<template>
    <header class="header">
        <Logo />
        <SearchBar />
        <div style="width: 50%">cfcfcffc</div>
    </header>
</template>

<script>
import Logo from './Logo'
import SearchBar from './SearchBar'

export default {
    components: {
        Logo,
        SearchBar,
    }
}
</script>

<style scoped>
header {
    background: #ffff8c;
    height: 50px;
    display: flex;
    justify-content: space-around;
    padding: 0 16px;
    flex-direction: row;
    width: 100%;    
}
</style>