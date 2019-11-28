<template>
  <div class="about">
    <h1>About page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .about{
        background-image: url("../assets/banner.jpg");
        background-size: cover;
        height: 100vh;
    }
    h1{
        color: white;
    }
</style>
