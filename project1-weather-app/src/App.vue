<template>
  <div class="">
    <div class="container center">
      <h1 class="white-text">Weather Today</h1>
      <search></search>
    </div>
  </div>
  
</template>

<script>
  import Search from './components/search.vue'
  export default {
    components: {
      'search': Search
    },
    data() {
      return {}
    }
  }
</script>

<style>
  body {
    background: url(assets/bg2.jpg) no-repeat center fixed;
    background-size: cover;
  }
  .overlay {
    background: black;
    opacity: 0.3;
    height: 100vh;
  }
  h1 {
    margin-top: 120px !important
  }
</style>
