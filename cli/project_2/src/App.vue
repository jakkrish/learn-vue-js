<template>
  <div id="app">
    <!-- <router-view/> -->
  <ListComponent></ListComponent>
  </div>
</template>

<script>
import ListComponent from './components/List'
export default {
  name: 'App',
  components: {ListComponent}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
