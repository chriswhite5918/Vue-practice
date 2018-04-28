import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  methods: {
    getHttp(url) {
      this.$http
        .get(url)
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
  },
  render: h => h(App)
});
