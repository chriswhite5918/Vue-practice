<template>
  <div class="container">
    <content-area></content-area>
  </div>
</template>

<script>
import ContentArea from './conponents/ContentArea.vue'
export default {
  components: {
    'contentArea': ContentArea
  }
}
</script>

<style>
  body {
    background: black
  }
</style>
