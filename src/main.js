import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Plugin } from 'vue-fragment'
Vue.use(Plugin)

import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount('.page-wrapper')