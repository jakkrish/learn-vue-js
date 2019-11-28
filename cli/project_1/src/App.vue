<template>
  <div id="app">
    <span class="name-holder">{{name}}</span>
    
    <input class="box-text" type="text" v-model="name"/>

    <input class="reset-button" @click="changeName()" type="button" value="Change">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'Jay'
    }
  },
  methods: {
    changeName : function() {
      this.name = 'Krishnan';
    }
  }

}
</script>

<style lang="scss">
.name-holder,.reset-button,.box-text{
  display: block;
  margin: 20px;
}
.name-holder{
  width: 100%;
}
.reset-button{
  background-color: aquamarine;
  width: 400px;
  height: 30px;
  font-size: 18px;
}

</style>
