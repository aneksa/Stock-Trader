// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import { routes } from './routes.js'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // without hashtag
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
