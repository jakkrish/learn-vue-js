<template>
  <div id="app">
    {{msg}}
    <navigation/>
  </div>
</template>

<script>
import Navigation from './Navbar'
export default {
  name: 'app',
  components: {
    navigation : Navigation
  },
  data () {
    return {
      msg: '.....'
    }
  }
}
</script>

<style lang="scss">
  @import 'main.scss';
</style>
