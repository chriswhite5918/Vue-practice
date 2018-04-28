import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  // routes: routes (before ES6)
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

new Vue({
  el: '#app',
  // router: router (before ES6)
  router,
  render: h => h(App)
});
