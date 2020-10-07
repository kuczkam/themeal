<template>
<div id="app" class="wrapper">
  <Header />
  <Section />
</div>
</template>

<script>
import Section from  './components/Section'
import Header from  './components/Header'
 export default {
  name: 'App',
  components: {
    Section,
    Header
  },
 }
</script>

<style>
.wrapper {
  display: flex;  
  flex-flow: row wrap;
  text-align: center;
}

.wrapper > * {
  padding: 10px;
  flex: 1 100%;
}

.container {
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #000;
  background: #cecece;
  width: 290px;
  margin: 50px;
}

.filter {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 20px;
    align-content: center;
}

.filter li {
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 10px;
  margin: 3px;
}

input:focus{
    outline: none;
}

  .col-1 {
    background: #cecece;
    flex: 1;
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    flex: 5;
  }
  .content {
    display: flex;
    flex-direction: row;
  }
  .content > article {
    flex: 4;
    min-height: 60vh;
  }
  header, footer {
    height: 20vh;
  }
  header, footer, article, nav {
    padding: 1em;
  }
</style>
