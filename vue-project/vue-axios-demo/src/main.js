import Vue from 'vue'
import App from './App.vue'
// 自定义loading
import Loading from './components/loading'
import Test from './test'
Vue.use(Loading)
Vue.use(Test)
// 引入store
import store from './store'
// 引入vue-router
import VueRouter from 'vue-router'
import routes from './router.config'
Vue.use(VueRouter)
// 引入axios
import interceptor from './interceptor.config'

// 创建路由对象，这里注意变量名，如果下面要使用对象简写的话，该处就只能叫router，和Vue对象
// 的属性相对应 store 同理
const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
