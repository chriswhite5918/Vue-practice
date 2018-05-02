<template>
  <div class="">
    <div class=""></div>
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
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
</script>

<style>
  body {
    background: url(assets/bg3.jpg) no-repeat center fixed;
    background-size: cover;
  }
  .overlay {
    background: black;
    opacity: 0.3;
    height: 100vh;
  }
  h1 {
    margin-top: 120px !important;
    font-family: 'Raleway', sans-serif !important;
  }
</style>
