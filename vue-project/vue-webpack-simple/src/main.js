import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import 'animate.css/animate.css'

new Vue({
  el: '#app',
  store: store,
  // render: function (createElement) {
  // 	return createElement(App);
  // }
  render: h => h(App)
})
