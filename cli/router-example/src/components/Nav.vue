<template>
  <div class="nav">
    <ul>
        <li>
            <router-link to="/">Home</router-link>
            <router-link :to="{name: 'About'}">About</router-link>
        </li>
        <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
