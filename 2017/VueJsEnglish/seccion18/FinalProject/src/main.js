import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from './route.js'
import store from './store/store.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // history evita ver urls feas 
  routes: routes // tambien podria ser solo routes por la sintaxis ES6
});

new Vue({
  el: '#app',
  router, //aqui si usamos la ventaja que da ES6 de no escribir lo mismo 2 veces (router: router)
  store,
  render: h => h(App)
})
