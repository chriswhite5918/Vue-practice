import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'; // Out sourced

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // counter: 0
  },
  getters: {
    // doubleCounter: state => state.counter * 2,
    // stringCounter: state => state.counter + 'clicks'
  },
  mutations: {
    // increment: (state, payload) => {
    //   state.counter += payload;
    // },
    // decrement: (state, payload) => {
    //   state.counter -= payload;
    // }
  },
  actions: {
    // increment: (context, payload) => {
    //   context.commit('increment', payload);
    // },
    // decrement: (context, payload) => {
    //   context.commit('decrement', payload);
    // },
    // asyncIncrement: (context, payload) => {
    //   setTimeout(() => {
    //     context.commit('increment', payload.by);
    //   }, payload.duration);
    // },
    // asyncDecrement: (context, payload) => {
    //   setTimeout(() => {
    //     context.commit('decrement', payload.by);
    //   }, payload.duration);
    // }
    // Using ES6 Destructuring
    // increment: ({commit}, payload) => {
    //     commit('increment', payload)
    // },
    // decrement: ({commit}, payload) => {
    //     commit('decrement', payload)
    // },
    // asyncIncrement: ({ commit }, payload) => {
    //     setTimeout(() => {
    //       commit('increment', payload.by);
    //     }, payload.duration);
    //   },
    // asyncDecrement: ({ commit }, payload) => {
    //     setTimeout(() => {
    //       commit('decrement', payload.by);
    //     }, payload.duration);
    //   }
  },
  modules: {
    counter
  }
});
