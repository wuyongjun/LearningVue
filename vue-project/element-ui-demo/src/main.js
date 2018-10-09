import Vue from 'vue'
// 引入全部的ui组件，提及较大
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './components/elementUI.js'
import Axios from 'axios'
import App from './App.vue'

// Vue.use(ElementUI)
Vue.prototype.$http = Axios;

new Vue({
  el: '#app',
  render: h => h(App)
})
