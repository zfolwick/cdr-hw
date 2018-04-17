// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from './components/Button'

import '@rei/cdr-assets/dist/cdr-core.css';
import '@rei/cdr-assets/dist/cdr-fonts.css';
import {CdrButton } from '@rei/cdr-button'
import '@rei/cdr-button/dist/cdr-button.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
   el: '#btn',
   myrouter,
   components: {CdrButton },
})
