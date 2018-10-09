// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'
import { routers } from './routes.config'
import 'animate.css/animate.css'

Vue.config.productionTip = false
//修改vue的原型链
Vue.prototype.$axios = Axios;
// // 使用插件
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由信息 注意名称为Router不行
const router = new VueRouter({
  routes: routers, // *******routes属性*********很重要
  mode: 'history' // 防止url上出现#
});

// 全局守卫
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  next();
  // if (to) {

  // } else {

  // }
});

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
